angular.module('app.services', [])

.factory('$skygear', [function () {
    skygear.config({
        'apiKey': '94a9d05a1b6146c3a7455cb3f146546c',
        'endPoint': 'https://todo.staging.skygeario.com/'
    });
    return skygear;
}])

.service('$items', ['$skygear', function ($skygear) {
    var that = this;
    var Item = $skygear.Record.extend('item');
    this.items = [];
    this.update = function () {
        if ($skygear.currentUser) {
            var query = new $skygear.Query(Item);
            query.equalTo('_owner_id', $skygear.currentUser.id)
            query.addDescending('_created_at');
            return $skygear.publicDB.query(query).then(function (records) {
                that.items = records;
                that._onUpdate(records);
            }, function (err) {
                console.error(err);
            });
        }
    };
    this._onUpdate = function () {};
    this.onUpdate = function (callback) {
        that._onUpdate = callback;
    }
    this.create = function (item) {
        $skygear.publicDB.save(new Item(item)).then(function (record) {
            that.items.push(record);
            that._onUpdate(that.items);
        }, function (err) {
            console.error(err);
        });
    };
    this.sync = function (index) {
        $skygear.publicDB.save(that.items[index]).then(function () {
            that._onUpdate(that.items);
        }, function (err) {
            console.error(err);
        });
    };
    this._current = 0;
    this.markCurrent = function (index) {
        that._current = index;
    };
    this.current = function () {
        return that.items[that._current];
    };
    this.delete = function (index) {
        $skygear.publicDB.delete(that.items[index]).then(function () {
            that.items.splice(index, 1);
            that._onUpdate(that.items);
        }, function (err) {
            console.error(err);
        })
    }
}]);

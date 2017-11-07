'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _grodnoTransportGpsPositionsScraper = require('grodno-transport-gps-positions-scraper');

var _grodnoTransportGpsPositionsScraper2 = _interopRequireDefault(_grodnoTransportGpsPositionsScraper);

var _collector = require('../lib/collector');

var _collector2 = _interopRequireDefault(_collector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_collector2.default.startCollect();

var simpleRoutesForTest = [{ type: "bus", number: "1" }, { type: "bus", number: "2" }];
(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return _collector2.default.use(_grodnoTransportGpsPositionsScraper2.default, simpleRoutesForTest);

                case 2:

                    setInterval(function () {
                        var allVehicles = _collector2.default.vehicles;
                        for (var i = 0, n = allVehicles.length, vehicle = allVehicles[0]; i < n; vehicle = allVehicles[++i]) {
                            console.log("Vehicle " + vehicle.globalId + ": " + vehicle.route.type + " " + vehicle.route.number + ", coords: lat= " + vehicle.lat + ", lng=" + vehicle.lng);
                        }
                        console.log();
                    }, 2000);

                case 3:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}))();

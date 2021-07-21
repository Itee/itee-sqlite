console.log('Itee.Database.SQLite v1.0.3 - CommonJs')
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SQLiteDriver = require('sqlite3');
var iteeDatabase = require('itee-database');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

var SQLiteDriver__namespace = /*#__PURE__*/_interopNamespace(SQLiteDriver);

/**
 * @author [Ahmed DCHAR]{@link https://github.com/dragoneel}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

class TSQLiteDatabase extends iteeDatabase.TAbstractDatabase {

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{},
            ...parameters,
            ...{
                driver: SQLiteDriver__namespace
            }
        };

        super( _parameters );

    }

    close ( /*onCloseCallback*/ ) {}

    connect () {

        var db = new this._driver.Database( ':memory:' );

        db.serialize( function () {
            db.run( 'CREATE TABLE lorem (info TEXT)' );
            var stmt = db.prepare( 'INSERT INTO lorem VALUES (?)' );

            for ( var i = 0 ; i < 10 ; i++ ) {
                stmt.run( 'Ipsum ' + i );
            }

            stmt.finalize();

            db.each( 'SELECT rowid AS id, info FROM lorem', function ( err, row ) {
                this.logger.log( row.id + ': ' + row.info );
            } );
        } );

        db.close();

    }

    init () {
        super.init();

    }

    on ( /*eventName, callback*/ ) {}
}

exports.TSQLiteDatabase = TSQLiteDatabase;
//# sourceMappingURL=itee-sqlite.cjs.js.map

console.log('Itee.Database.SQLite v1.0.3 - EsModule')
import * as SQLiteDriver from 'sqlite3';
import { TAbstractDatabase } from 'itee-database';

/**
 * @author [Ahmed DCHAR]{@link https://github.com/dragoneel}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

class TSQLiteDatabase extends TAbstractDatabase {

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{},
            ...parameters,
            ...{
                driver: SQLiteDriver
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

export { TSQLiteDatabase };
//# sourceMappingURL=itee-sqlite.esm.js.map

// Type definitions for pouchdb-adapter-websql v6.1.2
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace Core {
        interface DatabaseInfo {
            sqlite_plugin?: boolean;
            websql_encoding?: 'UTF-8' | 'UTF-16';
        }
    }

    namespace AdapterWebSql {
        interface Configuration
                extends Configuration.LocalDatabaseConfiguration {
            /**
             * Amount in MB to request for storage.
             */
            size?: number;
            adapter: 'websql';
        }
    }

    interface Static {
        new<Content extends Core.Encodable>(name: string | void,
            options: AdapterWebSql.Configuration): Database<Content>;
    }
}

declare module 'pouchdb-adapter-websql' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}

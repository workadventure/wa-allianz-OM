/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer("roofZone1").subscribe(() => {
        WA.room.hideLayer("Roof1");
    });
    WA.room.onLeaveLayer("roofZone1").subscribe(() => {
        WA.room.showLayer("Roof1");
    });


    WA.room.onEnterLayer("roofZone2").subscribe(() => {
        WA.room.hideLayer("Roof2");
    });
    WA.room.onLeaveLayer("roofZone2").subscribe(() => {
        WA.room.showLayer("Roof2");
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


export {};

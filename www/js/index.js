/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();  
            
        
        
        var map = L.map('map',{ zoomControl: false }).setView([28.5,84], 8);
        L.control.zoom({position:'bottomright'}).addTo(map);
        //this works, but is online:
        
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 25,
            attribution: 'Map data © OpenStreetMap contributors'
        }).addTo(map);
        
        
        //todo build something to fall back to web if not found.
        //l.tilelayer('img/maptiles/{z}/{x}/{y}.png', {
        //  maxzoom: 17
        //}).addto(map);


        // L.marker([45.423, -75.679]).addTo(map)
        //     .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

        var popup = L.popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
        }

        map.on('click', onMapClick);
        
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log(cordova.file);
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 1, this.gotFS, this.failFS); 
    },
    
    gotFS: function(){
        alert('hello world')
    },

    failFS: function(){
        alert('error');
    },
    // Update DOM on a Received Event

    resizeMap: function() {
         $("#map-canvas").height(Math.max(100,$(window).height()-90));// TODO set 
    }
    
    
};

    

    
import { Component, OnInit } from '@angular/core';

declare var H: any;

@Component({
    selector: 'app-geo-location',
    templateUrl: './geo-location.component.html',
    styleUrls: ['./geo-location.component.css']
})
export class GeoLocationComponent implements OnInit {
    showWarning = false;  // Flag to show/hide the alert warning
    apiKey = '5mLPJXEk5e5WB8-hBGYPoMgHobI73LjF0P4jEt2Bt74';


    ngOnInit(): void {
        if (!this.apiKey) {
        this.showWarning = true;
        } else {
        this.initializeMap();
        }
    }

    hideAlert(): void {
        this.showWarning = false;
    }

    initializeMap(): void {

        const platform = new H.service.Platform({
        apikey: this.apiKey
        });

        const defaultLayers = platform.createDefaultLayers();

        const map = new H.Map(
        document.getElementById('map'),
        defaultLayers.vector.normal.map,
        {
            center: { lat: 29.0588, lng: 76.0856 },
            zoom: 14,
            pixelRatio: window.devicePixelRatio || 1
        }
        );

        window.addEventListener('resize', () => map.getViewPort().resize());

        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        const ui = H.ui.UI.createDefault(map, defaultLayers);
    }
}

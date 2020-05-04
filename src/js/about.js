import './general';


export function initMap(){
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 13.113222, lng:-59.598808}
    });

    const maker = new google.maps.Marker({
        map, 
        draggable: true, 
        animation: google.maps.Animation.DROP,
        position: {lat: 13.113222, lng:-59.598808}
    })

    marker.addEventListener('click', () => {
        infowindow.open(map, marker);
    })

    const infowindow = new google.maps.Infowindow({
        content: `<h3>Event Location</h3><p>Event Address with all the contact details</p>`
    })

    infowindow.open(map, marker);
}

window.addEventListener('load', () =>{
    const $script = document.createElement('script');
    $script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GMAP_KEY}&callback=bundle.initMap`;
    document.querySelector('body').appendChild($script);

    console.log(`${process.env.GMAP_KEY}`)
})
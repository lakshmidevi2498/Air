import React, { useEffect ,useState} from "react";
import Imports from "../commons/AllImports";

const SearchComponentMaps = ({name}) => {
    const mapUrls = {
        India: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1970000.492746783!2d78.9629!3d20.5937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f10f01c4a1e9187%3A0x23a9a582dff9f6!2sIndia!5e0!3m2!1sen!2sus!4v1692720368786!5m2!1sen!2sus",
        Anguilla: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d158327.29194956813!2d-63.0686!3d18.2206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c53a14f4a49b12d%3A0x4c4bbd5d5e58c43!2sAnguilla!5e0!3m2!1sen!2sus!4v1692720368786!5m2!1sen!2sus",
        Thailand: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d122011.55139919903!2d100.5018!3d13.7563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991d11a9aab9%3A0x1b3b6fe1248f38a0!2sThailand!5e0!3m2!1sen!2sus!4v1692720368786!5m2!1sen!2sus"
      };
    
      return (
        <Imports.Grid container xs={12} md={4}>
          <Imports.Grid item xs={12} sx={{ position: 'sticky', top: 180, zIndex: 9, width: '100%', height: '600px' }}>
            {mapUrls[name] ? (
              <iframe
                src={mapUrls[name]}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : null}
          </Imports.Grid>
        </Imports.Grid>
      );
}

export default SearchComponentMaps
import React from "react";
import galleryData from "./data.json";

function Gallery() {
  return (
    <div className="container mx-auto">
      <div className=" w-full h-2/4 md:pb-40 bg-gray-400 border border-gray-500 border-t-0 mb-2">
        <h1 className="text-center max-w-5xl mx-auto text-5xl py-5 text-cyan-500">
          Our best times and memories in University of global village(UGV)
        </h1>
      </div>
      <h2>Beginning of the Journey - 2019</h2>
      <div className="mx-3">
        <div className="grid grid-row-dense md:grid-col m-3 grid-cols-4">
          <div classname="mx-3">
            <img
              className="w-80 h-auto"
              src={galleryData.ninetheen.image0}
              alt="Palestine students-  UGV"
            />
            <div className="relative">
              <h5 className="z-10 absolute bottom-20 left-20 text-xl  text-white inline-flex">
                {galleryData.ninetheen.title0}
              </h5>
              <p>{galleryData.ninetheen.desc0}</p>
            </div>
          </div>

          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.ninetheen.image1}
              alt="sudanese students"
            />
            <h5>{galleryData.ninetheen.title1}</h5>
            <p>{galleryData.ninetheen.desc1}</p>
          </div>

          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.ninetheen.image2}
              alt="internation students UGV"
            />
            <h5>{galleryData.ninetheen.title2}</h5>
            <p>{galleryData.ninetheen.desc2}</p>
          </div>
          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.ninetheen.image3}
              alt="sudanese students"
            />
            <h5>{galleryData.ninetheen.title3}</h5>
            <p>{galleryData.ninetheen.desc3}</p>
          </div>
          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.ninetheen.image4}
              alt="Lawrence tigo"
            />
            <h5>{galleryData.ninetheen.title4}</h5>
            <p>{galleryData.ninetheen.desc4}</p>
          </div>
          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.ninetheen.image5}
              alt="sudanese students"
            />
            <h5>{galleryData.ninetheen.title5}</h5>
            <p>{galleryData.ninetheen.desc5}</p>
          </div>
          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.ninetheen.image6}
              alt="International students"
            />
            <h5>{galleryData.ninetheen.title6}</h5>
            <p>{galleryData.ninetheen.desc6}</p>
          </div>
          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.ninetheen.image7}
              alt="International students"
            />
            <h5>{galleryData.ninetheen.title7}</h5>
            <p>{galleryData.ninetheen.desc7}</p>
          </div>
        </div>
        <h2>Our jouney start getting intense and trickier, but lovely- 2020</h2>
        <div className="grid grid-row-dense md:grid-col m-3 grid-cols-4">
          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.twenty.image0}
              alt="sudanese studanese"
            />
            <h5>{galleryData.twenty.title0}</h5>
            <p>{galleryData.twenty.desc0}</p>
          </div>
          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.twenty.image1}
              alt="University football club - UGV"
            />
            <h5>{galleryData.twenty.title1}</h5>
            <p>{galleryData.twenty.desc1}</p>
          </div>
          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.twenty.image2}
              alt="University football club - UGV"
            />
            <h5>{galleryData.twenty.title2}</h5>
            <p>{galleryData.twenty.desc2}</p>
          </div>
          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.twenty.image3}
              alt="University football club - UGV"
            />
            <h5>{galleryData.twenty.title3}</h5>
            <p>{galleryData.twenty.desc3}</p>
          </div>
          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.twenty.image4}
              alt="University football club - UGV"
            />
            <h5>{galleryData.twenty.title4}</h5>
            <p>{galleryData.twenty.desc4}</p>
          </div>
          <div className="mx-3">
            <img
              className="w-80 h-60"
              src={galleryData.twenty.image5}
              alt="Sudanese students"
            />
            <h5>{galleryData.twenty.title5}</h5>
            <p>{galleryData.twenty.desc5}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

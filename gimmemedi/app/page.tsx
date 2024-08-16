"use client"
import Image from "next/image";
import { SearchForm } from "./app_components/SearchForm";
import Feed from "./app_components/Feed";
import { useState } from "react";



export default function Home() {
  const [dDetails, setDDetails] = useState([])

  return (
    // <div>
    //   <div className="flex justify-center mt-5">
    //     <SearchForm setDDetails={setDDetails} />
    //   </div>
    //   <Card>
    //     {dDetails.dName}
    //     {dDetails.dosageForms}
    //   </Card>
    // </div>

  <div className="container mx-auto p-4">
  <div className="flex justify-center mt-5">
    <SearchForm dDetails={dDetails} setDDetails={setDDetails} />
  </div>

  <Feed dDetails={dDetails}/>
  </div>
  );
}

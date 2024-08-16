import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { useState } from "react";
  import Link from "next/link";
  import { Button } from "@/components/ui/button";

const Feed = ({ dDetails }: { dDetails: any }) => {
    console.log('dDetails', dDetails)
  return (
    <div>
         { dDetails.drugDetails && (
            <Card className="mt-5 p-4 border rounded shadow-lg">
            <h2 className="text-xl font-bold mb-2">{dDetails.drugDetails.dName}</h2>
            <ul className="list-none">
                {dDetails.drugDetails.dosageForms.map((form: string, index: number) => (
                <li key={index} className="mb-1">{form}</li>
                ))}
            </ul>
            { dDetails.drugMechanism && (
                <div>
                    <span className='font-bold'>Mechanism of action: </span>{dDetails.drugMechanism.dMechanism}
                </div>
            )}
            <div className="space-x-5">
                <Button>
                <Link href={`https://www.drugs.com/pregnancy/${dDetails.drugDetails.dName}.html`}>Pregnancy</Link>
                </Button>
                
                <Button>
                <Link href={`https://www.drugs.com/breastfeeding/${dDetails.drugDetails.dName}.html`}>BreastFeeding</Link>
                </Button>
            </div>
            
            </Card>)
        }
        
    </div>
)
}

export default Feed
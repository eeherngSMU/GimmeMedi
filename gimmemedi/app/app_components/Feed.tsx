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
  return (
    <div>
         { dDetails.dosageForms && 
            <Card className="mt-5 p-4 border rounded shadow-lg">
            <h2 className="text-xl font-bold mb-2">{dDetails.dName}</h2>
            <ul className="list-none">
                {dDetails.dosageForms.map((form: string, index: number) => (
                <li key={index} className="mb-1">{form}</li>
                ))}
            </ul>
            <div className="space-x-5">
                <Button>
                <Link href={`https://www.drugs.com/pregnancy/${dDetails.dName}.html`}>Pregnancy</Link>
                </Button>
                
                <Button>
                <Link href={`https://www.drugs.com/breastfeeding/${dDetails.dName}.html`}>BreastFeeding</Link>
                </Button>
            </div>
            
            </Card>
        }
    </div>
)
}

export default Feed
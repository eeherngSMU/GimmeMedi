"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const formSchema = z.object({
  drugname: z.string().min(2, {
    message: "Drug Name must be at least 2 characters.",
  }),
})

export function SearchForm({ dDetails, setDDetails }: { dDetails: any, setDDetails: (drugDetails: any) => void }) {

  // const [drugInfoArr, setDrugInfoArr] = useState<any[]>([]);
  
  const getDrugDetails = async (input: string) => {
    const res = await fetch('/api/drugs.com', {
      method: 'POST',
      body: JSON.stringify({input})
    })
  
    
    const drugDetails = await res.json()
    
    return drugDetails
  }

  const getDrugMechanism = async (input: string) => {
    const res = await fetch('/api/drugbank', {
      method: 'POST',
      body: JSON.stringify({input})
    })
  
    
    const drugMechanism = await res.json()
    return drugMechanism
    
    
  }




  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      drugname: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    
    

    const drugMechanism = await getDrugMechanism(values.drugname)
    const drugDetails = await getDrugDetails(values.drugname)
    
    const drugInfoObj = {drugDetails: drugDetails, drugMechanism: drugMechanism}
    setDDetails(drugInfoObj)
    console.log('drugInfoArr', drugInfoObj)
    


    // ✅ This will be type-safe and validated.
    
    
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="drugname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Drug Name</FormLabel>
              <FormControl>
                <Input placeholder="Drug Name" {...field}/>
              </FormControl>
              <FormDescription>
                This is the name of the drug you want to search.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

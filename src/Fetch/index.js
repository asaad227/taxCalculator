import React from 'react'

export default function Fetch() {
    async function getTax() {
        const response = await fetch(`https://api.service.hmrc.gov.uk/individuals/calculations`);
        const data = await response.json();
        console.log(data);
    }
    getTax();
  return (
    <div>
        <h1>Fetch</h1>
    </div>
  )
}

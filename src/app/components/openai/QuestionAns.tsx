
import React, { useState } from 'react';
import Test from '../TestOpenAi/Test';

const QuestionAns = async({openai}:any) => {
   
      const getData = async()=>{
        
        const response:any = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-16k",
            messages: [
              {
                "role": "user",
                "content": "write a ice ream review"
              },
              {
                "role": "assistant",
                "content": "Food Company"
              }
            ],
            temperature: 1,
            max_tokens: 64,
            top_p: 1,
          });
          const result:any = response.choices[0].message;
          return result;
      }
      const data = await getData();
      console.log(data);
      
    
      return (
        <div>
          <Test data={data}></Test>
            {/* {data && <>{data.content}</>} */}
        </div>
    );
    
};

export default QuestionAns;
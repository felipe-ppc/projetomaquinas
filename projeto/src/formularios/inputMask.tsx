import React from "react";
import { PatternFormat } from 'react-number-format';

type innerRef = {
    innerRef: any
}

const InputMasks= ({innerRef}: innerRef) =>{

    return(
        <>
       <PatternFormat format="+55 (##) #####-####" allowEmptyFormatting mask="_" />
        </>
    )
}
export default InputMasks;
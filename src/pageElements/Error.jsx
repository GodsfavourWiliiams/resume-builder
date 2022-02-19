export const FormErrors = ({formErrors}) =>

<div className='' >
  {Object.keys(formErrors).map((fieldName, i) => {
    if(formErrors[fieldName].length > 0){
      return (
        <div className='alert alert-danger errors' key={i}>
           <strong class="font-bold pr-2">Huh!! </strong>
           {fieldName} {formErrors[fieldName]}
          </div>
      )        
    } else {
      return '';
    }
  })}
</div>
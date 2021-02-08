import React from "react";
import { Formik } from "formik";
import { CreateNewCard } from "../../redux/actions";

const CreateCardFormikExample =() => {
    return (
    
    <Formik
    initialValues={{ title: '', subtitle: '', description: '' }}
    validate={(values) => {
      const errors = {};
      if (!values.title) {
        errors.title = "Title is required.";
       
      }
    if (!values.subtitle) {
        errors.subtitle = "Subtitle is required.";
       
      }
    if (!values.description) {
        errors.description = "Description is required.";
     
      }
      return errors
    }}
    onSubmit={(values, {setSubmitting})=> {
     CreateNewCard(values.title, values.subtitle,values.description)
     setSubmitting(false) }
    }
  >
    
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
           
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={values.title}
                  placeholder="Title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.title && touched.title && errors.title}
            
                <input
                  type="text"
                  name="subtitle"
                  className="form-control"
                  placeholder="Subtitle"
                  value={values.subtitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
               {errors.subtitle && touched.subtitle && errors.subtitle}
            
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  placeholder="Description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.description &&
                  touched.description &&
                  errors.description}
             
                <button type="submit" disabled={isSubmitting}>
                  Dodaj
                </button>
          </form>
        )}
  
  </Formik>
  
                )};
export default CreateCardFormikExample;

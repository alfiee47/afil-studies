import React, { useState,useEffect } from 'react'
import { Form ,Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import FirebaseService from '../firebaseService';








export default function AdminComponent() {


const [blogs,setBlogs]=useState([]);
const { register, handleSubmit, watch, formState: { errors } } = useForm();



const Fetchdata = ()=>{
    FirebaseService.getAll().get().then((querySnapshot) => {
         
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var id = element.id
            var data = element.data();
            setBlogs(arr => [...arr , {id: id, title: data.title, description: data.description}]);
              
        });
    })
}


const handleDelete = (id)=>{
  alert(id)
 FirebaseService.remove(id)
}

useEffect(() => {
    Fetchdata();
  }, [] )




const onSubmit = data => FirebaseService.create(data);




  return(
  
  
  <div>
    <Form className="col-4"  onSubmit={handleSubmit(onSubmit)} >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>News Title:</Form.Label>
      <Form.Control type="text" placeholder="Enter Title" {...register("title")}/>

    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={6} placeholder="Enter description"  {...register("description")} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>

  <div>
  {
        blogs.map((blog)=>{
          return(
            <div className="blog-container" key={blog.id}>
              <h4>{blog.title}</h4>
              <p>{blog.description}</p>
              <Button onClick={handleDelete(blog.id)}>delete</Button>
              <Button>Edit</Button>
            </div>
          )
        })
      }
  </div>
        </div>
        
        )
    }
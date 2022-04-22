import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // food details
  foodDetails = [
    {
      id: 1,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo Ice Cresm",
      foodPrice:200,
      foodImage:"https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 2,
      foodName:"French Spaggeti with cheese",
      foodDetails:"Spaggeti",
      foodPrice:150,
      foodImage:"https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      foodName:"Chocolate Brownie ",
      foodDetails:"Oreo Ice Cresm",
      foodPrice:200,
      foodImage:"https://images.unsplash.com/photo-1644930638139-1e3a14ff0b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo Ice Cresm",
      foodPrice:200,
      foodImage:""
    },
    {
      id: 5,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo Ice Cresm",
      foodPrice:200,
      foodImage:"https://images.unsplash.com/photo-1619985632461-f33748ef8f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"
    },
    {
      id: 6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo Ice Cresm",
      foodPrice:200,
      foodImage:"https://images.unsplash.com/photo-1575159240098-aa58517eda9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 7,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo Ice Cresm",
      foodPrice:200,
      foodImage:"https://images.unsplash.com/photo-1492016775777-ed98c058f826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
    },
    {
      id: 8,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo Ice Cresm",
      foodPrice:200,
      foodImage:"https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YSUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
  ]

}

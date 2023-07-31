const reviewsCont=document.getElementById('reviews_show')

const getAllReview = async()=>{


    const res=await fetch('http://localhost:5000/api/getAllReview',{method:'GET'})
    const review=await res.json()

    

    var reviewStr=""
    review.forEach(item => {
       
        

        reviewStr += `

        <div class="review-card">
                <div class="user-dp" data-rating="5"><img src="images/user.png" alt=""></div>
                <h2 class="review-title">${item.R_head}</h2>
                <p class="review">${item.R_body}</p>
            </div>
        
        `
        
    });
    reviewsCont.innerHTML=reviewStr
   


}
getAllReview()







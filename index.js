const posts = [
    {
        name: "Vincent",
        username: "v!nc3y666",
        location: "Zundert, Netherlands",
        avatar: "https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f437.png",
        post: "https://i0.wp.com/zarabianienasniadanie.pl/wp-content/uploads/2018/09/piglet-3045288_1920.jpg?ssl=1",
        comment: "I am looking 👀",
        likes: 732
    },
    {
        name: "Demelza",
        username: "d3mmy123",
        location: "Ornans, France",
        avatar: "https://i.pinimg.com/236x/e7/a5/48/e7a548ac373e6092ca388444d83e3587--little-pigs-little-babies.jpg",
        post: "https://images.photowall.com/products/65876/piglet-1.jpg?h=699&q=85",
        comment: "baby hours, who up?",
        likes: 964
    },
        {
        name: "Broderick",
        username: "xXx_epic_piggy_xXx",
        location: "Paris, France",
        avatar: "data:image/jpeg;base64,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",
        post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbPxGKd6acpPKVhrWKBXcecVXyGNz6zp17g&usqp=CAU",
        comment: "just ate a carrot",
        likes: 420
    }
]

const container = document.getElementById("container")

let likes = []
for(let i = 0; i < posts.length; i++){
    likes[i] = posts[i].likes
}

render()



for(let i = 0; i < posts.length; i++){
    const button = document.getElementById(`like-btn-${i}`)
    const pic = document.getElementById(`pic-${i}`)
    const element = document.getElementById(`likes-${i}`)
    
    button.addEventListener("click",function(){
        likes[i]++
        element.textContent = `${likes[i]} likes`
    })
    
    pic.addEventListener("dblclick", function(){
        likes[i]++
        element.textContent = `${likes[i]} likes`
    })
    
}

function render(){
    for(let i = 0; i < posts.length; i++){
        content = `
            <section class="post">
            
                <div class="op">
                    <img class="avatar op-avatar" src=${posts[i].avatar}>
                    <div class="op-info">
                        <h2 class="op-name bold-text">${posts[i].name}</h2>
                        <h3 class="op-location">${posts[i].location}</h3>
                    </div>
                </div>
                
                
                <img id="pic-${i}" class="post-pic" src=${posts[i].post}>
                
                
                <div class="description">
                    <div class="sub-icons">
                        <img id="like-btn-${i}" class="icon" src="images/icon-heart.png">
                        <img class="icon" src="images/icon-comment.png">
                        <img class="icon" src="images/icon-dm.png">
                    </div>
                    
                    <h2 id="likes-${i}" class="likes bold-text">${posts[i].likes} likes</h2>
                    <p class="comment"><span class="bold-text">${posts[i].username}</span>${posts[i].comment}</p>
                </div>
                
            </section>
        `
        container.innerHTML += content
    }
    
}
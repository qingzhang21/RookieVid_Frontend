<template>
  <div class="home">
    <div class="carousel-container" >
      <!-- <div>titles</div> -->
      <!-- <div v-for="(title,index) in this.titles" :key="index">{{ title }}</div> -->
      <div class="carousel-wrapper">
        <div class="carousel-images">
          <div class="carousel-image" 
          v-for="(img,index) in this.images" 
          :key="index" 
          :style="{ backgroundImage: 'url(' + img + ')' }"
          :class="{
            'carousel-image': true,
            'active': index === currentIndex,
            'prev': index === getImageIndex(-1),
            'next': index === getImageIndex(1),
          }">
          </div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="menu">娱乐</div>
      <div class="recommend-container">
        <div v-for="(video,index) in this.partition1" :key="index" class="recommend-item">
          <img class="recommend-img" :src="video.cover_url">
          <div class="title">{{ video.title }}</div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="menu">生活</div>
      <div class="recommend-container">
        <div v-for="(video,index) in this.partition2" :key="index" class="recommend-item">
          <img class="recommend-img" :src="video.cover_url">
          <div class="title">{{ video.title }}</div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="menu">学习</div>
      <div class="recommend-container">
        <div v-for="(video,index) in this.partition3" :key="index" class="recommend-item">
          <img class="recommend-img" :src="video.cover_url">
          <div class="title">{{ video.title }}</div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="menu">游戏</div>
      <div class="recommend-container">
        <div v-for="(video,index) in this.partition4" :key="index" class="recommend-item">
          <img class="recommend-img" :src="video.cover_url">
          <div class="title">{{ video.title }}</div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="menu">运动</div>
      <div class="recommend-container">
        <div v-for="(video,index) in this.partition5" :key="index" class="recommend-item">
          <img class="recommend-img" :src="video.cover_url">
          <div class="title">{{ video.title }}</div>
          <div class="author">
            <span class="author_tag">作者</span>
            <span class="author_name"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="menu">美食</div>
      <div class="recommend-container">
        <div v-for="(video,index) in this.partition6" :key="index" class="recommend-item">
          <img class="recommend-img" :src="video.cover_url" @click="video_play">
          <div class="title">{{ video.title }}</div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="menu">音乐</div>
      <div class="recommend-container">
        <div v-for="(video,index) in this.partition7" :key="index" class="recommend-item">
          <img class="recommend-img" :src="video.cover_url">
          <div class="title">{{ video.title }}</div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="menu">影视</div>
      <div class="recommend-container">
        <div v-for="(video,index) in this.partition8" :key="index" class="recommend-item">
          <img class="recommend-img" :src="video.cover_url">
          <div class="title">{{ video.title }}</div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="menu">科技</div>
      <div class="recommend-container">
        <div v-for="(video,index) in this.partition9" :key="index" class="recommend-item">
          <img class="recommend-img" :src="video.cover_url">
          <div class="title">{{ video.title }}</div>
        </div>
      </div>
    </div>
        <!-- <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/1.jpeg" alt="Image 1">
          <div class="title">娱乐-标题1</div>
        </div>
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/2.jpeg" alt="Image 2">
          <div class="title">娱乐-标题2</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/3.jpeg" alt="Image 3">
          <div class="title">娱乐-标题3</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/4.jpeg" alt="Image 4">
          <div class="title">娱乐-标题4</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/5.jpeg" alt="Image 5">
          <div class="title">娱乐-标题5</div>
        </div>  -->    
    <!-- <div class="recommend">
      <div class="menu">生活</div>
      <div class="recommend-container">
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/1.jpeg" alt="Image 1">
          <div class="title">生活-标题1</div>
        </div>
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/2.jpeg" alt="Image 2">
          <div class="title">生活-标题2</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/3.jpeg" alt="Image 3">
          <div class="title">生活-标题3</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/4.jpeg" alt="Image 4">
          <div class="title">生活-标题4</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/5.jpeg" alt="Image 5">
          <div class="title">生活-标题5</div>
        </div> 
      </div>
    </div> -->
    <!-- <div class="recommend">
      <div class="menu">学习</div>
      <div class="recommend-container">
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/1.jpeg" alt="Image 1">
          <div class="title">学习-标题1</div>
        </div>
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/2.jpeg" alt="Image 2">
          <div class="title">学习-标题2</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/3.jpeg" alt="Image 3">
          <div class="title">学习-标题3</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/4.jpeg" alt="Image 4">
          <div class="title">学习-标题4</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/5.jpeg" alt="Image 5">
          <div class="title">学习-标题5</div>
        </div> 
      </div>
    </div>
    <div class="recommend">
      <div class="menu">游戏</div>
      <div class="recommend-container">
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/1.jpeg" alt="Image 1">
          <div class="title">学习-标题1</div>
        </div>
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/2.jpeg" alt="Image 2">
          <div class="title">学习-标题2</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/3.jpeg" alt="Image 3">
          <div class="title">学习-标题3</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/4.jpeg" alt="Image 4">
          <div class="title">学习-标题4</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/5.jpeg" alt="Image 5">
          <div class="title">学习-标题5</div>
        </div> 
      </div>
    </div>
    <div class="recommend">
      <div class="menu">运动</div>
      <div class="recommend-container">
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/1.jpeg" alt="Image 1">
          <div class="title">学习-标题1</div>
        </div>
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/2.jpeg" alt="Image 2">
          <div class="title">学习-标题2</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/3.jpeg" alt="Image 3">
          <div class="title">学习-标题3</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/4.jpeg" alt="Image 4">
          <div class="title">学习-标题4</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/5.jpeg" alt="Image 5">
          <div class="title">学习-标题5</div>
        </div> 
      </div>
    </div>
    <div class="recommend">
      <div class="menu">美食</div>
      <div class="recommend-container">
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/1.jpeg" alt="Image 1">
          <div class="title">学习-标题1</div>
        </div>
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/2.jpeg" alt="Image 2">
          <div class="title">学习-标题2</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/3.jpeg" alt="Image 3">
          <div class="title">学习-标题3</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/4.jpeg" alt="Image 4">
          <div class="title">学习-标题4</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/5.jpeg" alt="Image 5">
          <div class="title">学习-标题5</div>
        </div> 
      </div>
    </div>
    <div class="recommend">
      <div class="menu">音乐</div>
      <div class="recommend-container">
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/1.jpeg" alt="Image 1">
          <div class="title">学习-标题1</div>
        </div>
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/2.jpeg" alt="Image 2">
          <div class="title">学习-标题2</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/3.jpeg" alt="Image 3">
          <div class="title">学习-标题3</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/4.jpeg" alt="Image 4">
          <div class="title">学习-标题4</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/5.jpeg" alt="Image 5">
          <div class="title">学习-标题5</div>
        </div> 
      </div>
    </div>
    <div class="recommend">
      <div class="menu">影视</div>
      <div class="recommend-container">
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/1.jpeg" alt="Image 1">
          <div class="title">学习-标题1</div>
        </div>
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/2.jpeg" alt="Image 2">
          <div class="title">学习-标题2</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/3.jpeg" alt="Image 3">
          <div class="title">学习-标题3</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/4.jpeg" alt="Image 4">
          <div class="title">学习-标题4</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/5.jpeg" alt="Image 5">
          <div class="title">学习-标题5</div>
        </div> 
      </div>
    </div> -->
    <!-- <div class="recommend">
      <div class="menu">科技</div>
      <div class="recommend-container">
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/1.jpeg" alt="Image 1">
          <div class="title">学习-标题1</div>
        </div>
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/2.jpeg" alt="Image 2">
          <div class="title">学习-标题2</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/3.jpeg" alt="Image 3">
          <div class="title">学习-标题3</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/4.jpeg" alt="Image 4">
          <div class="title">学习-标题4</div>
        </div> 
        <div class="recommend-item">
          <img class="recommend-img" src="../assets/testImg/5.jpeg" alt="Image 5">
          <div class="title">学习-标题5</div>
        </div> 
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import axios from 'axios'

export default{
  data(){
    return{
      images:[
        ""
        // "../assets/testImg/1.jpeg",
        // "../assets/testImg/2.jpeg"
      ],
      titles:[""],
      videos:[""],
      partition1:[""],
      partition2:[""],
      partition3:[""],
      partition4:[""],
      partition5:[""],
      partition6:[""],
      partition7:[""],
      partition8:[""],
      partition9:[""],

      currentIndex: 0,
    }
  },
  created(){
    this.getData(),
    this.getData('娱乐')
    this.getData('生活')
    this.getData('学习')
    this.getData('游戏')
    this.getData('运动')
    this.getData('美食')
    this.getData('音乐')
    this.getData('影视')
    this.getData('科技')
    
    // this.getData("")
  },
  mounted() {
  // this.getData("mounted");
  
  setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      
    }, 3000);
  },
  methods: {
    getImageIndex(offset) {
      return (
        (this.currentIndex + this.images.length + offset) % this.images.length
      );
    },
    video_play(){


    },
    getData(text){
      Promise.all([
        axios.get('/videos/get_video_by_hotness'),
        axios.get('/videos/get_video_by_label',{params:{label:text,num:5}})
      ])
      .then(([response1,response2])=>{
        console.log(response1.data);
        console.log(response2.data);
        if (Array.isArray(response1.data.videos)) {
          response1.data.videos.forEach((video, index) => {
            this.images[index] = video.cover_url;
            this.titles[index] = video.title;
            this.videos[index] = video.video_url;
          });
        } else {
          console.log(`Error in getData(${text}): response.data is not an array`);
        }
        // console.log(response.data);
        response2.data.videos.forEach((video,index)=>{
          if(text==='娱乐'){this.partition1[index]=video;}  
          if(text==='生活'){this.partition2[index]=video;}
          if(text==='学习'){this.partition3[index]=video;}
          if(text==='游戏'){this.partition4[index]=video;}  
          if(text==='运动'){this.partition5[index]=video;}
          if(text==='美食'){this.partition6[index]=video;}
          if(text==='音乐'){this.partition7[index]=video;}  
          if(text==='影视'){this.partition8[index]=video;}
          if(text==='科技'){this.partition9[index]=video;}
          // console.log(this.partition1[index]);
        })
      })
      .catch(error => {
        console.log(error);
      });
    }
      // axios.get('/videos/get_video_by_hotness')
    //   .then(response=>{
    //     console.log(response.data);
    //     if (Array.isArray(response.data.videos)) {
    //       response.data.videos.forEach((video, index) => {
    //         this.images[index] = video.cover_url;
    //         this.titles[index] = video.title;
    //         this.videos[index] = video.video_url;
    //       });
    //     } else {
    //       console.log(`Error in getData(${text}): response.data is not an array`);
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    //   axios.get('/videos/get_video_by_label',{
    //     params:{
    //       label:'娱乐'
    //     }
    //   })
    //   .then(response=>{
    //     console.log(response.data);
    //     response.data.videos.forEach((video,index)=>{
    //       this.partition1[index]=video;
    //       console.log(this.partition1[index]);
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // }
    
    //   async getData(text) {
    //   try {
    //     const response = await axios.get('/videos/get_video_by_hotness');
    //     console.log(response.data);
    //     if (Array.isArray(response.data.videos)) {
    //       response.data.videos.forEach((video, index) => {
    //         // console.log(video.title);
    //         this.images[index] = video.cover_url;
    //         this.titles[index] = video.title;
    //         this.videos[index] = video.video_url;
    //         console.log(index,":",this.images[index]);
    //       });
    //     } else {
    //       console.log(`Error in getData(${text}): response.data is not an array`);
    //     }
    //   } catch (error) {
    //     console.log(`Error in getData(${text}): ${error}`);
    //   }
    // }
    
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  }
  
}
</script>

 <style>
 .menu{
  display: flex;
  justify-content: flex-start;
  height: 60px;
  line-height: 60px;
  margin-top:20px;
  font-size: 30px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.5;
  text-shadow: 1px 1px 1px #ccc;
 }
 .recommend-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;
  justify-items: center;
}
.recommend-item {
    width: 100%;
    height: 200px;
    position: relative;
    margin-bottom: 20px;
}
.recommend-img{
  width:100%;
  height:60%;
  object-fit:cover;
  border-radius: 6px;
}

  

.title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25%;
    /* background-color: rgba(0, 0, 0, 0.5); */
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    box-sizing: border-box;
  }
.carousel-container {
  padding-top:10px;
  width: 80%;
  height: 400px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}

.carousel-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left:0;
  right: 0;
}

.carousel-images {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* transform: translateX(calc(-40% - 20px)); */
  position: relative;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
}

.carousel-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  transition: all 0.5s ease-in-out;
  /* width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.2;
  transition: all 1s ease;
  z-index: 1;
  transform: scale(1.1); */
}

.carousel-image.active {
  opacity: 1;
  transform: translateX(0) scale(1);
  z-index: 2;
}

.carousel-image.prev {
  opacity: 0.6;
  transform: translateX(calc(-100% - 20px)) scale(0.8);
  z-index: 1;
}

.carousel-image.next {
  opacity: 0.6;
  transform: translateX(calc(100% + 20px)) scale(0.8);
  z-index: 1;
}

</style>
<template>
  <div id="home">
    <div class="container">
      <h2 class="title">Filip Fey</h2>
      <div class="content">
        <div class="profile-picture">
          <img alt="My profile picture" src="../assets/my-picture.jpg" />
        </div>
        <div class="block-text">
          <p>
            I am a mathematician and web developer specialized in JS frontend
            technologies. I am into web development for 5 years now and have 2
            years of work experience as frontend developer in corporate
            environment.
          </p>
          <p>
            I can quickly switch between all 3 mainstream frontend frameworks
            (Angular, Vue and React) with Vue being my favorite and React the
            most recent I used. At first, I was learning PHP while creating one
            of my personal projects and that's when I gained a solid
            understanding of SQL database structures and other stuff backend
            developers are concerned about. This knowledge gives me a broader
            picture of projects I work on, occasionally gets me some valuable
            insight and improves quality of communication with backend
            developers I work with.
          </p>
          <p>
            I value excellence, learning, teamwork and love for what I am doing.
            Improving myself and using that to improve others is what I think
            good life is about. I actively nurture these values so it is
            important to me that the company I am a part of nurtures these
            values as well.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 1140px;
  margin: auto;
}

.title {
  text-align: center;
  font-size: 30px;
  letter-spacing: 3px;
  font-style: italic;
  margin: 15px;
}
.profile-picture > img {
  width: 100%;
}

.block-text {
  font-family: Lato, sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-align: justify;
  padding: 0 7px 11px;
}

@media screen and (min-width: 768px) {
  .title {
    text-align: left;
    margin: 35px 15px;
  }

  .content {
    padding: 0 15px;
  }

  .block-text {
    padding: 0;
  }

  .profile-picture > img {
    width: 30%;
    float: right;
    margin-left: 15px;
    border-radius: 8px;
  }
}

@media screen and (min-width: 768px) {
  .profile-picture > img {
    width: 25%;
  }
}
</style>

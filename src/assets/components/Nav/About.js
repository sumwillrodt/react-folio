import React from "react";
import heroImage from "../../images/heroImage.jpg"

function About() {
  return (
    <section id="about" className="my-5 mx-5">
      <div id="bio">
        <h3>About Me</h3>
        <img src={heroImage} className="" style={{ width: "100%"}} alt="hero" />
        <p>Nisi labore ea est culpa consectetur veniam. Exercitation elit fugiat anim do eiusmod. Eiusmod laborum voluptate eu elit nostrud nulla deserunt ullamco aliqua. Nisi labore ea est culpa consectetur veniam. Exercitation elit fugiat anim do eiusmod. Eiusmod laborum voluptate eu elit nostrud nulla deserunt ullamco aliqua. Nisi labore ea est culpa consectetur veniam. Exercitation elit fugiat anim do eiusmod. Eiusmod laborum voluptate eu elit nostrud nulla deserunt ullamco aliqua. Nisi labore ea est culpa consectetur veniam. Exercitation elit fugiat anim do eiusmod. Eiusmod laborum voluptate eu elit nostrud nulla deserunt ullamco aliqua.</p>
        <p>Nisi labore ea est culpa consectetur veniam. Exercitation elit fugiat anim do eiusmod. Eiusmod laborum voluptate eu elit nostrud nulla deserunt ullamco aliqua.</p>
      </div>
    </section>
  )
}

export default About;
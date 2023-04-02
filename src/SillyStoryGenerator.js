import React, { useState } from "react";
import Input from "./Input";
import { RadioGroup } from "./Radio";
import "./styles.css";

function SillyStoryGenerator() {
  const [name, setName] = useState("");
  const [customName, setCustomName] = useState("");
  const [weight] = useState(300);
  const [temperature] = useState(94);
  const [isUK, setIsUK] = useState(false);
  const [story, setStory] = useState("");
  const [unitType, setUnitType] = useState("us");

  const sillyStory = (name, isUK) => {
    const weightUnit = isUK ? "stone" : "pounds";
    const weightQuantity = isUK ? Math.round(parseInt(weight) / 14) : weight;
    const temperatureUnit = isUK ? "centigrade" : "fahrenheit";
    const temperatureQuantity = isUK
      ? Math.round((parseInt(temperature) - 32) * (5 / 9))
      : temperature;

    const story = `It was ${temperatureQuantity} ${temperatureUnit} outside, so Big Daddy went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then turned into a slug and crawled away. ${name} saw the whole thing, but was not surprised — Big Daddy weighs ${weightQuantity}  ${weightUnit}, and it was a hot day. ${getRandomStoryEnding()}`;

    return story;
  };

  const getRandomStoryEnding = () => {
    const storyEndings = [
      "They went on an adventure and found a talking unicorn.",
      "They spent the day eating cheese and crackers.",
      "They fell into a hole and discovered a secret garden."
    ];
    const randomIndex = Math.floor(Math.random() * storyEndings.length);
    return storyEndings[randomIndex];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("story").style.display = "block";
    document.getElementById("story").style.backgroundColor = getRandomColor();

    const newName = customName !== "" ? customName : name;
    if (unitType !== "us" ? setIsUK(false) : setIsUK(true));
    const newStory = sillyStory(newName, isUK);

    setStory(newStory);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          label="First Name"
          id="customName"
          value={customName}
          onChange={(e) => setCustomName(e.target.value)}
        />
      </div>
      <div>
        <RadioGroup
          name="unit"
          id="country"
          value={unitType}
          checked="uk"
          onChange={(event) => setUnitType(event.target.value)}
          options={[
            { label: "US", value: "us" },
            { label: "UK", value: "uk" }
          ]}
        />
      </div>

      <button type="submit">Generate random story</button>
      <div id="story" style={{ backgroundColor: getRandomColor() }}>
        {story}
      </div>
    </form>
  );
}

export default SillyStoryGenerator;

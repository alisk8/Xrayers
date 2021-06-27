function submit_mes(){
    var ul = document.getElementById("border");
    var li = document.createElement("li");
    var messages = document.getElementById('message').value;
    li.appendChild(document.createTextNode(messages));
    li.classList.add('user_m')
    ul.appendChild(li);
  
    look_for_ans();
  
  }
  
  function look_for_ans(){
    var ul = document.getElementById("border");
    var des = document.createElement("li");
    var cure = document.createElement("li");
    var all = document.createElement("li");
    all.classList.add('bot_m')
    all.appendChild(document.createTextNode("If you are experiencing other symptoms, type the number provided above accordingly"))
    ans_val = document.getElementById('message').value;
    des.classList.add('bot_m');
    cure.classList.add('bot_m');
  
    if (ans_val == '1'){
      des.appendChild(document.createTextNode("Headaches are painful sensations in any part of the head, ranging from sharp to dull, that may occur with other symptoms."));
      cure.appendChild(document.createTextNode("Stay hydrated, get plenty of sleep, or use painkillers if necessary."));
      ul.appendChild(des);
      ul.appendChild(cure);
      ul.appendChild(all);
    } 
    else if (ans_val == '2'){
      des.appendChild(document.createTextNode("Muscle soreness is a side effect of the stress put on muscles when you exercise."));
      cure.appendChild(document.createTextNode("Take a cold shower if it is because of exerise. If you think it is because of a fever, rest and give it 10-12 hours. Try and drink liquids"));
      ul.appendChild(des);
      ul.appendChild(cure);
      ul.appendChild(all);
    }
     else if (ans_val == '3'){
      des.appendChild(document.createTextNode("Nausea is a queasy sensation including an urge to vomit."));
      cure.appendChild(document.createTextNode("Use a cool compress on areas near your head and consume ginger either raw or in a liquid form to ease symptoms."));
      ul.appendChild(des);
      ul.appendChild(cure);
      ul.appendChild(all);
    }
     else if (ans_val == '4'){
      des.appendChild(document.createTextNode("A common viral infection of the nose and throat."));
      cure.appendChild(document.createTextNode("Stay away from cold temperatures and cold food/drinks. Also, try to eat warm and soothing foods such as soup to increase your body temperature and clear nasal passages."));
      ul.appendChild(des);
      ul.appendChild(cure);
      ul.appendChild(all);
    }
     else if (ans_val == '5'){
      des.appendChild(document.createTextNode("Hyperventilation is rapid or deep breathing, usually caused by anxiety or panic."));
      cure.appendChild(document.createTextNode("Breathe slowly through pursed lips and drink water. Also, try to hold your breath for 10 to 15 seconds, breathe out and repeat this process several times."));
      ul.appendChild(des);
      ul.appendChild(cure);
      ul.appendChild(all);
    }
     else if (ans_val == '6'){
      des.appendChild(document.createTextNode("Fever is a  temporary increase in average body temperature of 98.6°F (37°C)."));
      cure.appendChild(document.createTextNode("constantly apply cold compress and take tylenol OR advil. If problem still persists, then regularly alternate advil and tylenol"));
      ul.appendChild(des);
      ul.appendChild(cure);
      ul.appendChild(all);
    }
     else if (ans_val == '7'){
      des.appendChild(document.createTextNode("Blurred Vision is decreased clarity or sharpness in vision."));
      cure.appendChild(document.createTextNode("Stay away from technology and sunlight and consult with an optometrist if symptoms persist for long periods of time."));
      ul.appendChild(des);
      ul.appendChild(cure);
      ul.appendChild(all);
    }
    else if (ans_val == '8'){
      des.appendChild(document.createTextNode("Allergies are a damaging immune response by the body to a substance, especially pollen, fur, a particular food, or dust, to which it has become hypersensitive."));
      cure.appendChild(document.createTextNode("Stay away from suspected allergens and use over-the-counter antihistamines as needed. If symptoms are persisting for a long time, consider getting an epinephrine injection and seeking immediate medical attention if case is severe."));
      ul.appendChild(des);
      ul.appendChild(cure);
      ul.appendChild(all);
    }
    else if (ans_val == '9'){
      des.appendChild(document.createTextNode("Frostbite is an injury caused by freezing of the skin and underlying tissues."));
      cure.appendChild(document.createTextNode("Relocate yourself to an area of warm temperature. Then, soak areas of your body that are affected in warm water that is 104°F to 104°F in temperature for a minimum of 30 minutes."));
      ul.appendChild(des);
      ul.appendChild(cure);
      ul.appendChild(all);
    }
    else {
      des.appendChild(document.createTextNode("Please enter a valid number"));
      ul.appendChild(des);
      ul.appendChild(all);
    }
  }
  
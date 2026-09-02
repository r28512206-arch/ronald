function analyzeResume(){

    let file =
      document.getElementById("resumeFile").files[0];

    if(!file){
      alert("Please upload a resume.");
      return;
    }

    // Hide upload page
    document
      .getElementById("uploadPage")
      .classList.add("hidden");

    // Show loading
    document
      .getElementById("loadingPage")
      .classList.remove("hidden");

    // Fake AI analysis delay
    setTimeout(showResults, 3000);
  }

  function showResults(){

    // Hide loading
    document
      .getElementById("loadingPage")
      .classList.add("hidden");

    // Show results
    document
      .getElementById("resultPage")
      .classList.remove("hidden");

    // Random ATS Score
    let score = Math.floor(Math.random() * 30) + 70;

    document.getElementById("scoreText")
      .innerHTML = score + "%";

    document.getElementById("progressBar")
      .style.width = score + "%";

    // Skills
    let skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Python",
      "SQL",
      "Communication",
      "Problem Solving"
    ];

    let skillsHTML = "";

    skills.forEach(skill => {

      skillsHTML +=
        `<span class="skill">${skill}</span>`;

    });

    document.getElementById("skillsContainer")
      .innerHTML = skillsHTML;

    // Summary
    document.getElementById("summaryText")
      .innerHTML =
      "The uploaded resume demonstrates strong technical skills, good project experience and ATS-friendly formatting. Candidate profile matches current hiring requirements.";

    // Selection Status
    let statusBox =
      document.getElementById("statusBox");

    if(score >= 75){

      statusBox.classList.add("selected");

      statusBox.innerHTML =
        "✅ Candidate Shortlisted for Next Round";

    }
    else{

      statusBox.classList.add("rejected");

      statusBox.innerHTML =
        "❌ Resume Needs Improvement";

    }
  }

  function goBack(){

    location.reload();

  }    
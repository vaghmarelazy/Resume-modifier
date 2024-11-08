window.addEventListener('load', function() {
  let jobDescription = '';
  
  // LinkedIn job description selector (common)
  const linkedinDescription = document.querySelector('.jobs-box__html-content');
  if (linkedinDescription) {window.addEventListener('load', function() {
  const jobDescriptionSelectors = [
    { selector: '.jobs-description-content__text', platform: 'LinkedIn' },
    { selector: '#jobDescriptionText', platform: 'Indeed' }
  ];

  function extractJobDescription() {
    for (const { selector, platform } of jobDescriptionSelectors) {
      const descriptionElement = document.querySelector(selector);
      if (descriptionElement) {
        const jobDescription = descriptionElement.innerText;
        console.log(`${platform} job description captured.`);
        return jobDescription;
      }
    }
    return null;
  }

  const jobDescription = extractJobDescription();

  if (jobDescription) {
    console.log("Job description found:", jobDescription);
    chrome.runtime.sendMessage({ type: 'JOB_DESCRIPTION', data: jobDescription });
  } else {
    console.log("Job description not found on this page.");
  }
});
    jobDescription = linkedinDescription.innerText;
    console.log("LinkedIn job description captured.");
  }

  // Indeed job description selector (common)
  const indeedDescription = document.querySelector('#jobDescriptionText');
  if (indeedDescription) {
    jobDescription = indeedDescription.innerText;
    console.log("Indeed job description captured.");
  }

  // Additional logging to verify content
  if (jobDescription) {
    console.log("Job description found:", jobDescription);
    chrome.runtime.sendMessage({ type: 'JOB_DESCRIPTION', data: jobDescription });
  } else {
    console.log("Job description not found on this page.");
  }
});
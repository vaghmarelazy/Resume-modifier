document.addEventListener('DOMContentLoaded', function() {
    const jobDescriptionText = document.getElementById('jobDescriptionText');
    
    // Listen for job description data from content script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === 'JOB_DESCRIPTION') {
        jobDescriptionText.innerText = message.data;
      }
    });
  
    document.getElementById('optimizeButton').addEventListener('click', () => {
      alert('Optimization process will be implemented here.');
    });
  });
  
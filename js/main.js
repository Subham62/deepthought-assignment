// Main Application Logic

// DOM Elements
const journeyBoard = document.getElementById('journeyBoard');
const journeyToggleBtn = document.getElementById('journeyToggleBtn');
const closeJourneyBtn = document.getElementById('closeJourneyBtn');
const assetsContainer = document.getElementById('assetsContainer');
const content = document.querySelector('.content');

// State
let isJourneyBoardOpen = true;

// Initialize App
function init() {
    renderAssets();
    setupEventListeners();
    updateJourneyBoardState();
}

// Render all assets from JSON data
function renderAssets() {
    // Loop through all tasks
    projectData.tasks.forEach(task => {
        // Create HTML for all assets in this task
        const assetsHTML = createTaskAssets(task);
        
        // Insert into container
        assetsContainer.innerHTML += assetsHTML;
    });
    
    // After rendering, setup expand/collapse for descriptions
    setupAssetExpandListeners();
}

// Setup event listeners for Journey Board toggle
function setupEventListeners() {
    // Toggle button (shown when sidebar is collapsed)
    journeyToggleBtn.addEventListener('click', () => {
        isJourneyBoardOpen = true;
        updateJourneyBoardState();
    });
    
    // Close button (inside sidebar)
    closeJourneyBtn.addEventListener('click', () => {
        isJourneyBoardOpen = false;
        updateJourneyBoardState();
    });
}

// Setup expand/collapse for asset descriptions
function setupAssetExpandListeners() {
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const assetId = btn.getAttribute('data-asset-id');
            const description = document.getElementById(`desc-${assetId}`);
            
            // Toggle expanded state
            btn.classList.toggle('expanded');
            description.classList.toggle('show');
        });
    });
}

// Update Journey Board visibility state
function updateJourneyBoardState() {
    if (isJourneyBoardOpen) {
        journeyBoard.classList.remove('collapsed');
        journeyToggleBtn.classList.remove('show');
        content.classList.add('expanded');
    } else {
        journeyBoard.classList.add('collapsed');
        journeyToggleBtn.classList.add('show');
        content.classList.remove('expanded');
    }
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', init);
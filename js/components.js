// Reusable Component Templates

/**
 * Creates HTML for a single asset card
 * @param {Object} asset - Asset data object
 * @returns {string} HTML string for asset card
 */
function createAssetCard(asset) {
    const hasVideoContent = asset.asset_content_type === 'video' && asset.asset_content;
    
    return `
        <div class="asset-card" data-asset-id="${asset.asset_id}">
            <div class="asset-header">
                <h3 class="asset-title">${asset.asset_title}</h3>
                <div class="asset-icon">ℹ️</div>
            </div>
            <div class="asset-body">
                <div class="asset-description-header">
                    <span class="description-label">Description:</span>
                    <button class="expand-btn" data-asset-id="${asset.asset_id}">
                        ▼
                    </button>
                </div>
                <div class="asset-description" id="desc-${asset.asset_id}">
                    ${asset.asset_description}
                </div>
                ${hasVideoContent ? `
                    <div class="asset-content">
                        <iframe 
                            src="${asset.asset_content}" 
                            title="${asset.asset_title}"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

/**
 * Creates HTML for all assets in a task
 * @param {Object} task - Task data object
 * @returns {string} HTML string for all asset cards
 */
function createTaskAssets(task) {
    return task.assets.map(asset => createAssetCard(asset)).join('');
}

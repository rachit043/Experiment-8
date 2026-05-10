<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lumina | Book Collection</title>
  <meta name="description" content="Manage your book collection with a beautiful, modern interface.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  
  <div class="app-container">
    <header class="header">
      <div class="logo">
        <i class='bx bx-book-reader'></i>
        <h1>Lumina</h1>
      </div>
      <p class="subtitle">Your premium book management workspace.</p>
    </header>

    <main class="main-content">
      
      <section class="form-section">
        <div class="glass-panel">
          <h2 id="form-title">Add New Book</h2>
          <form id="book-form">
            <input type="hidden" id="book-id">
            
            <div class="input-group">
              <label for="title">Book Title</label>
              <div class="input-wrapper">
                <i class='bx bx-text'></i>
                <input type="text" id="title" placeholder="e.g., The Great Gatsby" required>
              </div>
            </div>

            <div class="row">
              <div class="input-group">
                <label for="author">Author Name</label>
                <div class="input-wrapper">
                  <i class='bx bx-user'></i>
                  <input type="text" id="author" placeholder="e.g., F. Scott Fitzgerald" required>
                </div>
              </div>
              
              <div class="input-group">
                <label for="year">Publication Year</label>
                <div class="input-wrapper">
                  <i class='bx bx-calendar'></i>
                  <input type="number" id="year" placeholder="e.g., 1925" required>
                </div>
              </div>
            </div>

            <div class="form-actions">
              <button type="submit" id="submit-btn" class="btn btn-primary">
                <span>Add Book</span>
                <i class='bx bx-plus-circle'></i>
              </button>
              <button type="button" id="cancel-btn" class="btn btn-secondary hidden">
                <span>Cancel</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section class="collection-section">
        <div class="section-header">
          <h2>Your Collection</h2>
          <div class="search-bar">
             <i class='bx bx-search'></i>
             <input type="text" id="search-input" placeholder="Search books...">
          </div>
        </div>
        
        <div id="books-grid" class="books-grid">
          <!-- Book cards will be injected here via JavaScript -->
        </div>
        
        <div id="empty-state" class="empty-state hidden">
          <i class='bx bx-book-open'></i>
          <p>Your collection is empty.</p>
          <span class="hint">Add a book above to get started.</span>
        </div>
      </section>

    </main>
  </div>

  <script src="app.js"></script>
</body>
</html>

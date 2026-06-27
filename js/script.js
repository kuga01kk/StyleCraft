/* 
  StyleCraft – Personalized Fashion & Styling Generator
  Master JavaScript File (Student-Level, Readable, Well-Commented)
*/

// Wait until the HTML document is fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
  
  /* ==========================================================================
     1. MOBILE NAVIGATION MENU (HAMBURGER TOGGLE)
     ========================================================================== */
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      // Toggle active classes on both the button and menu list
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
    
    // Close the mobile menu when clicking on any navigation link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  /* ==========================================================================
     2. RANDOM FASHION TIP GENERATOR (HOME PAGE)
     ========================================================================== */
  const tips = [
    "Accessories can make or break your outfit. Keep it simple, elegant and timeless!",
    "When in doubt, choose pastel tones. They are globally flattering and look very premium.",
    "Invest in high-quality basics—like a white blazer or silk blouse—and build from there.",
    "Monochrome outfits (dressing in one color tone) instantly make you look taller and sleeker.",
    "Fit is everything! A tailored outfit in a cheap fabric always looks better than a poor fit in luxury silk.",
    "Contrast bold colors with neutrals. If wearing a hot pink skirt, keep the top beige or white.",
    "Always match your metal tones (jewelry) to your handbag hardware and shoe buckles for a polished look."
  ];

  const tipTextElement = document.getElementById("random-tip-text");
  if (tipTextElement) {
    // Generate a random index based on our tips array length
    const randomIndex = Math.floor(Math.random() * tips.length);
    // Display the random tip text
    tipTextElement.textContent = tips[randomIndex];
  }

  /* ==========================================================================
     3. STYLE RECOMMENDATION GENERATOR (GENERATOR PAGE)
     ========================================================================== */
  const generateBtn = document.getElementById("generate-btn");
  const resultsContainer = document.getElementById("generator-results");

  // Database of recommended outfits based on style selections
  const outfitDatabase = [
    // Wedding Recommendations
    {
      occasion: "wedding",
      color: "pastel",
      style: "traditional",
      outfit: "Lavender Embroidered Lehenga",
      image: "images/lavender-lehenga.png",
      neckStyle: "Sweetheart Neckline",
      accessories: "Silver Jhumkas, Pearl Bracelet, Silk Embroidered Potli",
      palette: ["#E6DFF2", "#F9D9E2", "#FFF1F4", "#FAF5F2"],
      tip: "Style Tip: Pastel shades bring sheer elegance and grace to wedding celebrations."
    },
    {
      occasion: "wedding",
      color: "pastel",
      style: "modern",
      outfit: "Blush Pink Indo-Western Gown",
      image: "images/wedding.png",
      neckStyle: "Off-Shoulder Style",
      accessories: "Rose Gold Drop Earrings, Sleek Diamond Bracelet, Box Clutch",
      palette: ["#F9D9E2", "#FCEDF0", "#EAE6E1", "#FFFFFF"],
      tip: "Style Tip: Indo-western pastel cuts look stunning with minimal jewelry."
    },
    {
      occasion: "wedding",
      color: "pastel",
      style: "minimalist",
      outfit: "Peach Satin Silk Anarkali Suit",
      image: "images/wedding.png",
      neckStyle: "Boat Neck",
      accessories: "Pearl Studs, Silver Sandals, Pastel Net Dupatta",
      palette: ["#FCE2DB", "#FFF2EE", "#EAE6E1", "#FFFFFF"],
      tip: "Style Tip: Keep makeup soft and choose light peach tones for high elegance."
    },
    {
      occasion: "wedding",
      color: "neutral",
      style: "traditional",
      outfit: "Ivory & Gold Zari Kanjeevaram Saree",
      image: "images/wedding.png",
      neckStyle: "High Round Collar",
      accessories: "Temple Gold Necklace, Kundan Jhumkas, Fresh Jasmine Flowers",
      palette: ["#FAF5F2", "#E5D3B3", "#D4AF37", "#2B1D20"],
      tip: "Style Tip: A traditional ivory and gold saree matches beautifully with clean gold pieces."
    },
    {
      occasion: "wedding",
      color: "bold",
      style: "traditional",
      outfit: "Royal Crimson Red Silk Lehenga",
      image: "images/wedding.png",
      neckStyle: "U-Shaped Low Neck",
      accessories: "Heavy Kundan Choker, Gold Bangles, Red Velvet Pouch",
      palette: ["#9E1A2B", "#D33B65", "#FFD700", "#FAF5F2"],
      tip: "Style Tip: Bold wedding red looks best paired with classic heavy choker jewelry."
    },

    // Office Recommendations
    {
      occasion: "office",
      color: "neutral",
      style: "minimalist",
      outfit: "Classic Beige Pantsuit with Silk Camisole",
      image: "images/office.png",
      neckStyle: "V-Neck Inner Camisole",
      accessories: "Minimalist Gold Hoop Earrings, Smart Watch, Tan Leather Tote",
      palette: ["#F2EBE1", "#EAE6E1", "#6E5C5F", "#2B1D20"],
      tip: "Style Tip: Pair neutrals like beige with structured tailoring for professional authority."
    },
    {
      occasion: "office",
      color: "pastel",
      style: "modern",
      outfit: "Sage Green Blazer Set with White Trousers",
      image: "images/office.png",
      neckStyle: "Notched Lapel Collar",
      accessories: "Silver Studs, Pointed Nude Pumps, Structured Black Laptop Bag",
      palette: ["#E2ECE4", "#FFFFFF", "#FAF5F2", "#6E5C5F"],
      tip: "Style Tip: Sage green is a fresh professional shade that breaks the monotony of black."
    },
    {
      occasion: "office",
      color: "bold",
      style: "modern",
      outfit: "Cobalt Blue Silk Shirt & Charcoal Pencil Skirt",
      image: "images/office.png",
      neckStyle: "Classic Pointed Collar",
      accessories: "Gold Chain Necklace, Black Leather Heels, Designer Belt",
      palette: ["#0F4C81", "#2B1D20", "#FFFFFF", "#6E5C5F"],
      tip: "Style Tip: High contrast bold office wear boosts presence in business presentations."
    },

    // Party Recommendations
    {
      occasion: "party",
      color: "bold",
      style: "modern",
      outfit: "Vibrant Fuchsia Satin Wrap Dress",
      image: "images/party.png",
      neckStyle: "Plunging V-Neckline",
      accessories: "Metallic Silver High Heels, Chandelier Earrings, Rhinestone Clutch",
      palette: ["#D33B65", "#E6DFF2", "#FAF5F2", "#2B1D20"],
      tip: "Style Tip: A bold wrap dress fits curves beautifully and sparkles under night lights."
    },
    {
      occasion: "party",
      color: "pastel",
      style: "modern",
      outfit: "Shimmering Lavender Mesh Cocktail Gown",
      image: "images/party.png",
      neckStyle: "Sweetheart Neck",
      accessories: "Crystal Drops, Diamond Ring, Sleek Silver Wristlet",
      palette: ["#E6DFF2", "#FFF1F4", "#FAF5F2", "#EFE6E2"],
      tip: "Style Tip: Pastel glitter shines soft and looks ultra-luxurious."
    },
    {
      occasion: "party",
      color: "neutral",
      style: "minimalist",
      outfit: "Sleek Little Black Slip Dress (LBD)",
      image: "images/party.png",
      neckStyle: "Spaghetti Straps Square Neck",
      accessories: "Gold Choker, Black Stilettos, Bold Red Lipstick",
      palette: ["#2B1D20", "#FFFFFF", "#FAF5F2", "#D33B65"],
      tip: "Style Tip: The slip LBD is a timeless party outfit. Add red lips for high drama."
    },

    // Casual Recommendations
    {
      occasion: "casual",
      color: "pastel",
      style: "minimalist",
      outfit: "Lilac Crop Top and High-Waisted White Denim",
      image: "images/casual.png",
      neckStyle: "Square Neck",
      accessories: "White Chunky Sneakers, Pastel Tote Bag, Rounded Sunglasses",
      palette: ["#E6DFF2", "#FFFFFF", "#F2EBE1", "#6E5C5F"],
      tip: "Style Tip: Clean pastel tops with neutral denim are great for brunch dates."
    },
    {
      occasion: "casual",
      color: "neutral",
      style: "minimalist",
      outfit: "Oversized Beige Cotton Shirt & Linen Shorts",
      image: "images/casual.png",
      neckStyle: "Relaxed Open Collar",
      accessories: "Leather Slides, Straw Hat, Woven Canvas Bag",
      palette: ["#F2EBE1", "#EAE6E1", "#FFFFFF", "#6E5C5F"],
      tip: "Style Tip: Loose linen matches are breathable and create a relaxed summer aesthetic."
    },
    {
      occasion: "casual",
      color: "bold",
      style: "modern",
      outfit: "Crimson Red Cotton Jumpsuit with Waist Tie",
      image: "images/casual.png",
      neckStyle: "Round Neck with Front Buttons",
      accessories: "Denim Jacket, Hoop Earrings, Brown Leather Crossbody Bag",
      palette: ["#D33B65", "#1F2E3D", "#F2EBE1", "#2B1D20"],
      tip: "Style Tip: Bold jumpsuits need only neutral shoes and minimal layers to stand out."
    }
  ];

  if (generateBtn && resultsContainer) {
    generateBtn.addEventListener("click", () => {
      // Fetch selected values from dropdown elements
      const occasionVal = document.getElementById("occasion").value;
      const colorVal = document.getElementById("color").value;
      const styleVal = document.getElementById("style").value;
      
      // Filter candidates from the outfitDatabase
      let matchedOutfits = outfitDatabase.filter(item => {
        return item.occasion === occasionVal && 
               item.color === colorVal && 
               item.style === styleVal;
      });

      // If no exact matches are found, perform partial match filtering
      if (matchedOutfits.length === 0) {
        matchedOutfits = outfitDatabase.filter(item => {
          return item.occasion === occasionVal && item.color === colorVal;
        });
      }

      // If still no partial matches are found, filter strictly by occasion
      if (matchedOutfits.length === 0) {
        matchedOutfits = outfitDatabase.filter(item => {
          return item.occasion === occasionVal;
        });
      }

      // Fallback: If database selection fails, default to first item
      const recommended = matchedOutfits.length > 0 ? matchedOutfits[0] : outfitDatabase[0];

      // Update the output HTML display cards dynamically
      let paletteHTML = "";
      recommended.palette.forEach(color => {
        paletteHTML += `<span class="color-circle" style="background-color: ${color};" title="${color}"></span>`;
      });

      resultsContainer.innerHTML = `
        <div class="generated-content">
          <div class="generated-image-box">
            <img src="${recommended.image}" alt="${recommended.outfit}">
          </div>
          <div class="generated-details">
            <h3>Recommended For You</h3>
            
            <div class="detail-row">
              <h4>Outfit</h4>
              <p>${recommended.outfit}</p>
            </div>
            
            <div class="detail-row">
              <h4>Neck Style</h4>
              <p>${recommended.neckStyle}</p>
            </div>
            
            <div class="detail-row">
              <h4>Accessories</h4>
              <p>${recommended.accessories}</p>
            </div>
            
            <div class="detail-row">
              <h4>Color Palette</h4>
              <div class="color-swatches">
                ${paletteHTML}
              </div>
            </div>
            
            <div class="tip-banner">
              <p>${recommended.tip}</p>
            </div>
          </div>
        </div>
      `;
    });
  }

  /* ==========================================================================
     4. CONTACT FORM VALIDATION & SUCCESS FEEDBACK
     ========================================================================== */
  const contactForm = document.getElementById("contact-form");
  const successBanner = document.getElementById("success-banner");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // Prevent default page reload
      e.preventDefault();

      // Reset previous error classes
      const formGroups = contactForm.querySelectorAll(".form-group");
      formGroups.forEach(group => group.classList.remove("has-error"));

      let isFormValid = true;

      // Validate Name field
      const nameInput = document.getElementById("contact-name");
      if (nameInput && nameInput.value.trim() === "") {
        nameInput.closest(".form-group").classList.add("has-error");
        isFormValid = false;
      }

      // Validate Email field
      const emailInput = document.getElementById("contact-email");
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (emailInput) {
        if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value.trim())) {
          emailInput.closest(".form-group").classList.add("has-error");
          isFormValid = false;
        }
      }

      // Validate Occasion field (Dropdown selection must not be empty)
      const occasionInput = document.getElementById("contact-occasion");
      if (occasionInput && occasionInput.value === "") {
        occasionInput.closest(".form-group").classList.add("has-error");
        isFormValid = false;
      }

      // Validate Message textarea
      const messageInput = document.getElementById("contact-message");
      if (messageInput && messageInput.value.trim() === "") {
        messageInput.closest(".form-group").classList.add("has-error");
        isFormValid = false;
      }

      // If all inputs pass checks, show submission success feedback banner
      if (isFormValid) {
        // Show the inline success banner
        if (successBanner) {
          successBanner.style.display = "block";
          
          // Smooth scroll to top of form/banner
          successBanner.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        
        // Reset form input values
        contactForm.reset();
      }
    });
  }

  /* ==========================================================================
     5. COLLAPSIBLE FAQ ACCORDION (CONTACT PAGE)
     ========================================================================== */
  const faqHeaders = document.querySelectorAll(".faq-header");

  if (faqHeaders.length > 0) {
    faqHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
        
        // Toggle the active class on the clicked FAQ item
        item.classList.toggle("active");
        
        // Optionally close other open items (accordion behavior)
        const allFaqItems = document.querySelectorAll(".faq-item");
        allFaqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });
      });
    });
  }
});

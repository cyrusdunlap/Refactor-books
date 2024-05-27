// Create a class for the element
class Book extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const subtitle = this.getAttribute("subtitle");
    const author = this.getAttribute("author");
    const publisher = this.getAttribute("publisher");
    const description = this.getAttribute("description");
    const pages = this.getAttribute("pages");
    const website = this.getAttribute("website");
    this.innerHTML = `
            <div class="card">
              <h5 class="card-header">${title}</h5>
              <div class="card-body">
              <a href="${website}" class="card-link" target="_blank"></a>
                <h5>${subtitle}</h5>
                    <p class="card-text">
                    <table class="table">
                        <tr>
                            <td class="text-success font-weight-bold">Title:</td>
                            <td>${title}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Subtitle:</td>
                            <td>${subtitle}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Author:</td>
                            <td>${author}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Publisher:</td>
                            <td>${publisher}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Pages:</td>
                            <td>${pages}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Description:</td>
                            <td>${description}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Website:</td>
                            <td>${website}</td>
                        </tr>
                    </table>
                    </p>
              </div>
            </div>
        `;
  }
}

// Define the new element
customElements.define("mit-book", Book);

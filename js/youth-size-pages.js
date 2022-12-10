// Related Links
window.onload = function () {
    // Array of links and anchor link name to be related by category by order
    var relatedLinks = ["/search-guide/article/what-is-a-youth-size-medium","/search-guide/article/what-is-a-youth-xs-size","/search-guide/article/what-is-a-youth-size-large",];


    var aLinkName = ["What is Youth Size Medium?","What is Youth XS Size?","What is Youth Size Large?",];
    
    // store url pathname as string into current variable 
    const currentUrl = window.location.pathname.toString();
    var i;

    // check if related links contain converted current Url string in array
    if (relatedLinks.includes(currentUrl)) {

        // if current Url exists in array - remove from link list & link name by it's corresponding index
        const linkIndex = relatedLinks.indexOf(currentUrl);
        relatedLinks.splice(linkIndex,1);
        aLinkName.splice(linkIndex, 1);

        // store new array in new variables
        var linkItem = relatedLinks;
        var nameItem = aLinkName;

        // execute a for loop for new set of array - get elements by their new index
        for (i = 0; i < linkItem.length && nameItem.length; i++) {
            idLink = linkItem[i];
            idText = nameItem[i];

            // create new element list item - insert innerhtml components
            let linkList = document.createElement("li");
            linkList.innerHTML = 
            `
            <a href="${idLink}">${idText}</a>
            `;

            // find element by it's id inside document and append created new list item
            document.getElementById("other-pages-list").appendChild(linkList);
        }
    } else {
        // execute a for loop for new set of array - get elements by their new index
        for (i = 0; i < relatedLinks.length && aLinkName.length; i++) {
            idLink = relatedLinks[i];
            idText = aLinkName[i];

            // create new element list item - insert innerhtml components
            let linkList = document.createElement("li");
            linkList.innerHTML = 
            `
            <a href="${idLink}">${idText}</a>
            `;

            // find element by it's id inside document and append created new list item
            document.getElementById("other-pages-list").appendChild(linkList);
        }
    }
};


// Tables For Youth Size Pages Only - insert onto page
if(document.getElementById('youth-size-table')) {
    document.getElementById('youth-size-table').innerHTML = `
    <br><br>
    <h2 class="title-secondary h2-highlight">Youth Size Chart:</h2>
    <p class="text">Most stores that sell clothes for children use a youth size chart. The chart provides a guide to help you select the correct size for your child.</p>
    <p class="text">There are a few things to keep in mind when using a youth size chart:</p>
    <div class="div-container">
        <ul>
            <li class="text"> First, remember that children grow at different rates. Some may be larger or smaller than their peers. </li>
            <li class="text"> Different brands and styles may fit differently. </li>
            <li class="text"> When looking at a youth size chart, you will notice the measurements: chest/bust and waist. The chest/bust measurement is taken from the child's armpit to armpit. The waist measurement is taken from the child's natural waistline, which is usually just above the belly button. </li>
            <li class="text"> To find the right size, first take your child's measurements. Then, consult the youth size chart to find the size that corresponds to those measurements. Keep in mind that you may need to adjust the size up or down based on the child's build and the fit of the clothing.</li>
            <li class="text"> Using a youth size chart is a helpful way to ensure you're selecting the right size clothing for your child. With a little bit of care, you can find clothes that fit well and that your child will be comfortable wearing.</li>
        </ul>
    </div> 
    <br><br>     
    <div class="table-container youth-table-wrap">
      <p class="text">Pants:</p>
          <table>
              <thead>
                  <tr>
                      <th>US</th>
                      <th class="mobile-remove">Canada</th>
                      <th class="mobile-remove">EU</th>
                      <th>Measurements</th>
                  </tr>
                  <tr>
                      <th></th>
                      <th class="mobile-remove"></th>
                      <th class="mobile-remove"></th>
                      <th>Waist, Length</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>XS (2-4)</td>
                      <td class="mobile-remove">XS (2-4)</td>
                      <td class="mobile-remove">XS (128)</td>
                      <td>
                          <p class="status status-low">20”, 19”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>S (6-8)</td>
                      <td class="mobile-remove">S (6-8)</td>
                      <td class="mobile-remove">S (140)</td>
                      <td>
                          <p class="status status-low">22”, 20”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>M (10-12)</td>
                      <td class="mobile-remove">M (10-12)</td>
                      <td class="mobile-remove">M (152)</td>
                      <td>
                          <p class="status status-low">24”, 22”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>L (14-16)</td>
                      <td class="mobile-remove">L (14-16)</td>
                      <td class="mobile-remove">L (164)</td>
                      <td>
                          <p class="status status-low">26”, 24”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>XL (18-20)</td>
                      <td class="mobile-remove">XL (18-20)</td>
                      <td class="mobile-remove">XL (176)</td>
                      <td>
                          <p class="status status-mid">28”, 26”</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <br>
      <h2></h2>
      <div class="table-container youth-table-wrap">
      <p class="text">Shorts:</p>
          <table>
              <thead>
                  <tr>
                      <th>US</th>
                      <th class="mobile-remove">Canada</th>
                      <th class="mobile-remove">EU</th>
                      <th>Measurements</th>
                  </tr>
                  <tr>
                      <th></th>
                      <th class="mobile-remove"></th>
                      <th class="mobile-remove"></th>
                      <th>Waist, Length</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>XS (2-4)</td>
                      <td class="mobile-remove">XS (2-4)</td>
                      <td class="mobile-remove">XS (128)</td>
                      <td>
                          <p class="status status-low">20”, 11”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>S (6-8)</td>
                      <td class="mobile-remove">S (6-8)</td>
                      <td class="mobile-remove">S (140)</td>
                      <td>
                          <p class="status status-low">22”, 12”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>M (10-12)</td>
                      <td class="mobile-remove">M (10-12)</td>
                      <td class="mobile-remove">M (152)</td>
                      <td>
                          <p class="status status-low">24”, 13”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>L (14-16)</td>
                      <td class="mobile-remove">L (14-16)</td>
                      <td class="mobile-remove">L (164)</td>
                      <td>
                          <p class="status status-low">26”, 14”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>XL (18-20)</td>
                      <td class="mobile-remove">XL (18-20)</td>
                      <td class="mobile-remove">XL (176)</td>
                      <td>
                          <p class="status status-mid">28”, 15”</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <br>
      <h2></h2>
      <div class="table-container youth-table-wrap">
      <p class="text">Shirt:</p>
          <table>
              <thead>
                  <tr>
                      <th>US</th>
                      <th class="mobile-remove">Canada</th>
                      <th class="mobile-remove">EU</th>
                      <th>Measurements</th>
                  </tr>
                  <tr>
                      <th></th>
                      <th class="mobile-remove"></th>
                      <th class="mobile-remove"></th>
                      <th>Chest, Length</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>XS (2-4)</td>
                      <td class="mobile-remove">XS (2-4)</td>
                      <td class="mobile-remove">XS (128)</td>
                      <td>
                          <p class="status status-low">25”, 21”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>S (6-8)</td>
                      <td class="mobile-remove">S (6-8)</td>
                      <td class="mobile-remove">S (140)</td>
                      <td>
                          <p class="status status-low">27”, 22</p>
                      </td>
                  </tr>
                  <tr>
                      <td>M (10-12)</td>
                      <td class="mobile-remove">M (10-12)</td>
                      <td class="mobile-remove">M (152)</td>
                      <td>
                          <p class="status status-low">29”, 23”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>L (14-16)</td>
                      <td class="mobile-remove">L (14-16)</td>
                      <td class="mobile-remove">L (164)</td>
                      <td>
                          <p class="status status-low">31”, 24”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>XL (18-20)</td>
                      <td class="mobile-remove">XL (18-20)</td>
                      <td class="mobile-remove">XL (176)</td>
                      <td>
                          <p class="status status-mid">33”, 25”</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <br>
      <h2></h2>
      <div class="table-container youth-table-wrap">
      <p class="text">Shoes:</p>
          <table>
              <thead>
                  <tr>
                      <th>US</th>
                      <th class="mobile-remove">Canada</th>
                      <th class="mobile-remove">EU</th>
                      <th>Measurements</th>
                  </tr>
                  <tr>
                      <th></th>
                      <th class="mobile-remove"></th>
                      <th class="mobile-remove"></th>
                      <th>Length, Width</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>XS (2-4)</td>
                      <td class="mobile-remove">XS (2-4)</td>
                      <td class="mobile-remove">XS (128)</td>
                      <td>
                          <p class="status status-low">7.25”, 4.25”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>S (6-8)</td>
                      <td class="mobile-remove">S (6-8)</td>
                      <td class="mobile-remove">S (140)</td>
                      <td>
                          <p class="status status-low">8.25”, 4.75”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>M (10-12)</td>
                      <td class="mobile-remove">M (10-12)</td>
                      <td class="mobile-remove">M (152)</td>
                      <td>
                          <p class="status status-low">9.25”, 5.25”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>L (14-16)</td>
                      <td class="mobile-remove">L (14-16)</td>
                      <td class="mobile-remove">L (164)</td>
                      <td>
                          <p class="status status-low">10.25”, 5.75”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>XL (18-20)</td>
                      <td class="mobile-remove">XL (18-20)</td>
                      <td class="mobile-remove">XL (176)</td>
                      <td>
                          <p class="status status-mid">11.25”, 6.25”</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <br>
      <h2></h2>
      <div class="table-container youth-table-wrap">
      <p class="text">Gildan:</p>
          <table>
              <thead>
                  <tr>
                      <th>US</th>
                      <th class="mobile-remove">Canada</th>
                      <th class="mobile-remove">EU</th>
                      <th>Measurements</th>
                  </tr>
                  <tr>
                      <th></th>
                      <th class="mobile-remove"></th>
                      <th class="mobile-remove"></th>
                      <th>Chest, Length</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>XS (2-4)</td>
                      <td class="mobile-remove">XS (2-4)</td>
                      <td class="mobile-remove">XS (128)</td>
                      <td>
                          <p class="status status-low">25”, 21”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>S (6-8)</td>
                      <td class="mobile-remove">S (6-8)</td>
                      <td class="mobile-remove">S (140)</td>
                      <td>
                          <p class="status status-low">27”, 22”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>M (10-12)</td>
                      <td class="mobile-remove">M (10-12)</td>
                      <td class="mobile-remove">M (152)</td>
                      <td>
                          <p class="status status-low">29”, 23”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>L (14-16)</td>
                      <td class="mobile-remove">L (14-16)</td>
                      <td class="mobile-remove">L (164)</td>
                      <td>
                          <p class="status status-low">31”, 24”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>XL (18-20)</td>
                      <td class="mobile-remove">XL (18-20)</td>
                      <td class="mobile-remove">XL (176)</td>
                      <td>
                          <p class="status status-mid">33”, 25”</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <br>
      <h2></h2>
      <div class="table-container youth-table-wrap">
      <p class="text">Jacket:</p>
          <table>
              <thead>
                  <tr>
                      <th>US</th>
                      <th class="mobile-remove">Canada</th>
                      <th class="mobile-remove">EU</th>
                      <th>Measurements</th>
                  </tr>
                  <tr>
                      <th></th>
                      <th class="mobile-remove"></th>
                      <th class="mobile-remove"></th>
                      <th>Chest, Length</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>XS (2-4)</td>
                      <td class="mobile-remove">XS (2-4)</td>
                      <td class="mobile-remove">XS (128)</td>
                      <td>
                          <p class="status status-low">25”, 21”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>S (6-8)</td>
                      <td class="mobile-remove">S (6-8)</td>
                      <td class="mobile-remove">S (140)</td>
                      <td>
                          <p class="status status-low">27”, 22”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>M (10-12)</td>
                      <td class="mobile-remove">M (10-12)</td>
                      <td class="mobile-remove">M (152)</td>
                      <td>
                          <p class="status status-low">29”, 23”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>L (14-16)</td>
                      <td class="mobile-remove">L (14-16)</td>
                      <td class="mobile-remove">L (164)</td>
                      <td>
                          <p class="status status-low">31”, 24”</p>
                      </td>
                  </tr>
                  <tr>
                      <td>XL (18-20)</td>
                      <td class="mobile-remove">XL (18-20)</td>
                      <td class="mobile-remove">XL (176)</td>
                      <td>
                          <p class="status status-mid">33”, 25”</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  
    `;
  }
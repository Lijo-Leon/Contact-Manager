function addContact() {
    names = nameInput.value
    console.log(names);

    num = numInput.value
    console.log(num);

    if (names === "" && num === "") {
        alert("Please Add Name and Number")
    }

    else if (names === "") {
        alert("Please Add Name")
    }

    else if (num === "") {
        alert("Please Add Number")
    }

    else {
        let li = document.createElement("li")
        li.innerHTML =
            `
             <div class="w-[730px] h-[60px] rounded-xl border-[2px] border-[#555555a0] relative flex items-center text-white">
                 <i class="fa-solid fa-user ml-3 mr-7 h-11 w-11 rounded-full bg-[#515151a8] flex items-center justify-center "></i>
                 <span class="contact-name w-48">${names}</span>
                 <div class="line w-[1px] h-11 mx-10 bg-[#9494949d]"></div>
                 <span class="contact-number">${num}</span>
                 <div class="icons absolute right-16 space-x-8">
                     <button onclick="editDetails(this)" class="text-[#ccc] hover:text-[#ffffff]"><i class="fa-solid fa-file-pen"></i></button>
                     <button onclick="deleteDetails(this)" class="text-[#c83d3d] hover:text-[#ff1919]"><i class="fa-solid fa-trash"></i></button>
                 </div>
             </div>
            `

        contactList.appendChild(li)
        names.value = " "
        num.value = " "

        let nc = document.getElementById("no-contact");
            nc.style.display = "none"

            yourContacts.style.display = "block"

    }
}

function editDetails(button) {
    // Find the contact div
    let li = button.closest("li");
    let nameSpan = li.querySelector(".contact-name");
    let numberSpan = li.querySelector(".contact-number");

    // Prompt for new values
    let newName = prompt("Edit Name:", nameSpan.textContent);
    if (newName !== null && newName.trim() !== "") {
        nameSpan.textContent = newName.trim();
    }

    let newNumber = prompt("Edit Number:", numberSpan.textContent);
    if (newNumber !== null && newNumber.trim() !== "") {
        numberSpan.textContent = newNumber.trim();
    }

    alert(`Updated Contact:\nName: ${nameSpan.textContent}\nNumber: ${numberSpan.textContent}`);
}

function deleteDetails(button) {
    let li = button.closest("li")
    li.remove();

    if (contactList.children.length === 0) {
        let nc = document.getElementById("no-contact");
        nc.style.display = "block"

        yourContacts.style.display = "none"


    }
}






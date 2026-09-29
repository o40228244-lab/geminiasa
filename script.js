let classes = {

    "9th Boys":[
    "Ali Ahmad Farid","Naveed Latif","Adil Badshah","Muhammad Aliyan","Hasnain Ahmad",
    "Rayan","Muhammad Junaid","Muhammad Faiz","Mahad","Muhammad Aryan Adnan",
    "Muhammad Hashir","Ahmad Bari","Rao Ahsan","Muhammad Moeed","Muhammad Umar Rabbani",
    "Muhammad Hamdan","Aryan Usman","Hamad","Noor Murtaza","Muhammad Abdullah Falak",
    "Muhammad Talah","Ikrash","Muhammad Suleman Zia","Muhammad Sohaib","Muhammad Awwab",
    "Muhammad Muslim Khan","Muhammad Ibrahim","Muhammad Shahriyar","Muhammad Mustajab Hasan","Muhammad Umar Farooq"
    ],

    "9th Girls":[
    "Maha Maryam","Abeera Saqib","Meerab Adnan","Aiza Usman","Amna",
    "Mishal Muzammil","Arooj Fatima","Hafsa Malik","Zainab Ali","Abeera Adnan",
    "Sadia Noor","Hadia Anam","Ayesha Yusuf","Zahra Batul","Aimal Midha",
    "Tahreem Fatima","Zahra Bilal","Mahaddam Zainab","Amna Usman","Yashfa Latif","Zainab Iman"
    ],

    "10th Boys":[
    "Abdullah Maaz","Abdul Sattar","M Ayyan Nasir","Mahad","M Hassan",
    "Haider Ali","Shahzain","Muhammad","Hassnain Abbas","Zain Ali",
    "M Ahmad Shahzad","M Hermain Shahid","Noor Ul Hassan","Faizan Murtaza","M Umair",
    "M Saad","Momin Ali Zahid","Saif Ur Rehman","M Talha","M Hassan Abbas",
    "M Ali","M Junaid Latif","M Sudais Niazi","Ahmad Rana","Papu Khan",
    "Faizan Asmat","Husni Farooq","Haseeb Yousuf","M Farhan Ashraf","Usman",
    "M Ahmad Hameed","M Bilal","Abdullah","Ayan Ahmad"
    ],

    "10th Girls":[
    "Afira Hassan","Afshan","Aiman Fatima","Alishba Shahzad","Aliza",
    "Amna Abbas","Amna Ismail","Aqsa Gulzar","Areesha Hidayat","Arfa Khalil",
    "Ariba","Asia Bibi","Ayesha Husnain","Ayesha Naeem","Ayesha Zia",
    "Briha","Eman Fatima","Farheen Fatima","Fatima Abbas","Fiza Ijaz",
    "Fiza Noor","Iram Hafeez","Maham Zhra","Mahanil Fatima","Mahnoor",
    "Mubashira Ijaz","Naeema Khan","Nimra Farid","Noor","Noor Ul Ain Naeem",
    "Rehma Riaz","Rida Almas","Rizwana Batool","Romaisa Asghar","Sabiha Fatima",
    "Salma Riaz","Samia Bibi","Sanjeeda","Shabana Mehboob","Tooba Sajid",
    "Umaema","Waniza Siddique","Wareesha Rauf","Zainab Noor","Zainab Saeed",
    "Zainab Zahra","Zarmina","Zeenat Mohsin","Zunaira Yusuf"
    ]

};

// Pre-loaded ONLY latest test (2026-07-17) for 10th Girls
let defaultClassData = {
    "10th Girls": {
        tests: [
            { name: "Ch 12", date: "2026-07-17", tm: "10" }
        ],
        students: [
            { name: "Afira Hassan", marks: ["8.5"] },
            { name: "Afshan", marks: ["A"] },
            { name: "Aiman Fatima", marks: ["04"] },
            { name: "Alishba Shahzad", marks: ["08"] },
            { name: "Aliza", marks: ["05"] },
            { name: "Amna Abbas", marks: ["8.5"] },
            { name: "Amna Ismail", marks: ["07"] },
            { name: "Aqsa Gulzar", marks: ["08"] },
            { name: "Areesha Hidayat", marks: ["A"] },
            { name: "Arfa Khalil", marks: ["07"] },
            { name: "Ariba", marks: ["07"] },
            { name: "Asia Bibi", marks: ["8.5"] },
            { name: "Ayesha Husnain", marks: ["09"] },
            { name: "Ayesha Naeem", marks: ["2.5"] },
            { name: "Ayesha Zia", marks: ["01"] },
            { name: "Briha", marks: ["07"] },
            { name: "Eman Fatima", marks: ["8.5"] },
            { name: "Farheen Fatima", marks: ["3.5"] },
            { name: "Fatima Abbas", marks: ["9.5"] },
            { name: "Fiza Ijaz", marks: ["8.5"] },
            { name: "Fiza Noor", marks: ["5.5"] },
            { name: "Iram Hafeez", marks: ["00"] },
            { name: "Maham Zhra", marks: ["01"] },
            { name: "Mahanil Fatima", marks: ["7.5"] },
            { name: "Mahnoor", marks: ["7.5"] },
            { name: "Mubashira Ijaz", marks: ["7.5"] },
            { name: "Naeema Khan", marks: ["A"] },
            { name: "Nimra Farid", marks: ["A"] },
            { name: "Noor", marks: ["08"] },
            { name: "Noor Ul Ain Naeem", marks: ["8.5"] },
            { name: "Rehma Riaz", marks: ["05"] },
            { name: "Rida Almas", marks: ["6.5"] },
            { name: "Rizwana Batool", marks: ["05"] },
            { name: "Romaisa Asghar", marks: ["8.5"] },
            { name: "Sabiha Fatima", marks: ["A"] },
            { name: "Salma Riaz", marks: ["9.5"] },
            { name: "Samia Bibi", marks: ["5.5"] },
            { name: "Sanjeeda", marks: ["08"] },
            { name: "Shabana Mehboob", marks: ["04"] },
            { name: "Tooba Sajid", marks: ["1.5"] },
            { name: "Umaema", marks: ["A"] },
            { name: "Waniza Siddique", marks: ["4.5"] },
            { name: "Wareesha Rauf", marks: ["06"] },
            { name: "Zainab Noor", marks: ["A"] },
            { name: "Zainab Saeed", marks: ["09"] },
            { name: "Zainab Zahra", marks: ["A"] },
            { name: "Zarmina", marks: ["05"] },
            { name: "Zeenat Mohsin", marks: ["00"] },
            { name: "Zunaira Yusuf", marks: ["4.5"] }
        ]
    }
};

let students = [];
let tests = [];
let currentClass = "";

const area = document.getElementById("area");
const emptyState = document.getElementById("emptyState");
const pdfClassEl = document.getElementById("pdfClass");
const classSelect = document.getElementById("classSelect");
const head = document.getElementById("head");
const body = document.getElementById("body");
const modalOverlay = document.getElementById("modalOverlay");
const modalBox = document.getElementById("modalBox");
const toastEl = document.getElementById("toast");


// ===================== TOAST =====================
function toast(msg){
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => toastEl.classList.remove("show"), 2200);
}


// ===================== MODAL HELPERS =====================
function showModal(html){
    modalBox.innerHTML = html;
    modalOverlay.classList.remove("hidden");
    let firstInput = modalBox.querySelector("input");
    if(firstInput) setTimeout(() => firstInput.focus(), 50);
}

function hideModal(){
    modalOverlay.classList.add("hidden");
    modalBox.innerHTML = "";
}

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") hideModal();
});


// ===================== DISPLAY NAME (prefix hiding for Boys classes only) =====================
function getDisplayName(name, cls){
    if(cls !== "9th Boys" && cls !== "10th Boys") return name;

    let trimmed = (name || "").trim();

    if(trimmed === "Muhammad") return trimmed;

    let match;

    if(match = trimmed.match(/^Muhammad\s+(.+)$/i)){
        return match[1].trim();
    }

    if(match = trimmed.match(/^M\.\s*(.+)$/)){
        return match[1].trim();
    }

    if(match = trimmed.match(/^M\s+(.+)$/)){
        return match[1].trim();
    }

    return trimmed;
}


// ===================== EXPORT NAME (Expands M. or M to Muhammad for PDF/PNG) =====================
function getExportName(name){
    let trimmed = (name || "").trim();

    if(/^M\.\s*/i.test(trimmed)){
        return trimmed.replace(/^M\.\s*/i, "Muhammad ");
    }
    if(/^M\s+/i.test(trimmed)){
        return trimmed.replace(/^M\s+/i, "Muhammad ");
    }

    return trimmed;
}


// ===================== LOAD CLASS =====================
function loadClass(){
    currentClass = classSelect.value;
    if(!currentClass){
        area.style.display = "none";
        emptyState.style.display = "block";
        pdfClassEl.textContent = "";
        return;
    }

    if(isCombined(currentClass)){
        loadCombined();
        return;
    }
    setCombinedMode(false);

    let saved = localStorage.getItem(currentClass);

    if(saved){
        let data = JSON.parse(saved);
        students = data.students;
        tests = data.tests;
        sortStudents();
    } else if(defaultClassData[currentClass]) {
        students = JSON.parse(JSON.stringify(defaultClassData[currentClass].students));
        tests = JSON.parse(JSON.stringify(defaultClassData[currentClass].tests));
        sortStudents();
        saveData();
    } else {
        students = classes[currentClass].map(n => ({ name: n, marks: [] }));
        tests = [];
        sortStudents();
    }

    emptyState.style.display = "none";
    area.style.display = "block";
    pdfClassEl.textContent = currentClass;
    render();
}


// ===================== SORT STUDENTS BY DISPLAYED NAME =====================
function sortStudents(){
    students.sort((a, b) => {
        let nameA = getDisplayName(a.name, currentClass);
        let nameB = getDisplayName(b.name, currentClass);
        return nameA.localeCompare(nameB);
    });
}


// ===================== ADD TEST =====================
function addTest(){
    showModal(`
        <h3>Add New Test</h3>
        <label for="mTestName">Test Name</label>
        <input id="mTestName" type="text" placeholder="e.g. Chapter 5 Quiz">
        <label for="mTestDate">Date</label>
        <input id="mTestDate" type="date">
        <label for="mTestTM">Total Marks</label>
        <input id="mTestTM" type="number" min="1" placeholder="e.g. 20">
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" onclick="confirmAddTest()">Add Test</button>
        </div>
    `);
}

function confirmAddTest(){
    let name = document.getElementById("mTestName").value.trim();
    let date = document.getElementById("mTestDate").value;
    let tm = document.getElementById("mTestTM").value;

    if(!name){
        toast("Please enter a test name.");
        return;
    }

    tests.push({ name, date, tm });
    students.forEach(s => s.marks.push("A"));

    saveData();
    hideModal();
    render();
    toast("Test added.");
}


// ===================== ADD STUDENT =====================
function addStudent(){
    showModal(`
        <h3>Add New Student</h3>
        <label for="mStudentName">Student Name</label>
        <input id="mStudentName" type="text" placeholder="Full name">
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" onclick="confirmAddStudent()">Add Student</button>
        </div>
    `);
}

function confirmAddStudent(){
    let name = document.getElementById("mStudentName").value.trim();
    if(!name){
        toast("Please enter a student name.");
        return;
    }
    students.push({ name, marks: tests.map(() => "A") });
    sortStudents();
    saveData();
    hideModal();
    render();
    toast("Student added.");
}


// ===================== DELETE =====================
function deleteStudent(i){
    let name = students[i].name;
    showModal(`
        <h3>Remove Student?</h3>
        <p class="warn">This will permanently remove <strong>${name}</strong> and all their marks from this class.</p>
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" style="background:linear-gradient(135deg,#DC2626,#B91C1C)" onclick="confirmDeleteStudent(${i})">Remove</button>
        </div>
    `);
}

function confirmDeleteStudent(i){
    students.splice(i, 1);
    sortStudents();
    saveData();
    hideModal();
    render();
    toast("Student removed.");
}

function deleteTest(i){
    let name = tests[i].name;
    showModal(`
        <h3>Remove Test?</h3>
        <p class="warn">This will permanently remove <strong>${name}</strong> and every student's marks for it.</p>
        <div class="modal-actions">
            <button class="btn btn-outline" onclick="hideModal()">Cancel</button>
            <button class="btn btn-primary" style="background:linear-gradient(135deg,#DC2626,#B91C1C)" onclick="confirmDeleteTest(${i})">Remove</button>
        </div>
    `);
}

function confirmDeleteTest(i){
    tests.splice(i, 1);
    students.forEach(s => s.marks.splice(i, 1));
    saveData();
    hideModal();
    render();
    toast("Test removed.");
}


// ===================== RENDER =====================
function render(){
    head.innerHTML = "<th>Sr#</th><th>Student Name</th>";

    tests.forEach((t, i) => {
        head.innerHTML += `
        <th>
        ${t.name}<br>
        Date : ${t.date}<br>
        T.M = ${t.tm}<br>
        <button class="delete" onclick="deleteTest(${i})">Delete</button>
        </th>`;
    });

    head.innerHTML += "<th>Action</th>";
    body.innerHTML = "";

    students.forEach((s, i) => {
        let displayName = getDisplayName(s.name, currentClass);
        let row = `<tr><td>${i + 1}</td><td>${displayName}</td>`;

        s.marks.forEach((m, j) => {
            row += `<td>
            <input type="text" inputmode="numeric" value="${m}"
            class="${m=="A" ? 'absent' : ''}"
            onfocus="if(this.value=='A'){this.value='';this.className='';}"
            onclick="if(this.value=='A'){this.value='';this.className='';}"
            oninput="students[${i}].marks[${j}]=this.value;this.className=this.value=='A'?'absent':'';saveData();">
            </td>`;
        });

        row += `<td><button class="delete" onclick="deleteStudent(${i})">Delete</button></td></tr>`;
        body.innerHTML += row;
    });
}


// ===================== SAVE =====================
function saveData(){
    if(!currentClass || isCombined(currentClass)) return;
    localStorage.setItem(currentClass, JSON.stringify({ students, tests }));
}

function manualSave(){
    saveData();
    toast("Saved.");
}


// ===================== BACKUP / RESTORE =====================
function exportBackup(){
    let backup = {};
    Object.keys(classes).forEach(cls => {
        let saved = localStorage.getItem(cls);
        if(saved) backup[cls] = JSON.parse(saved);
    });

    if(Object.keys(backup).length === 0){
        toast("No saved data yet to back up.");
        return;
    }

    let blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    let today = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = "Physics_Results_Backup_" + today + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast("Backup downloaded.");
}

function triggerImport(){
    document.getElementById("importFile").click();
}

function importBackup(event){
    let file = event.target.files[0];
    if(!file) return;

    let reader = new FileReader();
    reader.onload = function(e){
        try{
            let data = JSON.parse(e.target.result);
            let count = 0;
            Object.keys(data).forEach(cls => {
                if(classes[cls]){
                    localStorage.setItem(cls, JSON.stringify(data[cls]));
                    count++;
                }
            });
            toast(count + " class(es) restored. Re-select the class to view.");
            if(currentClass && (data[currentClass] || isCombined(currentClass))) loadClass();
        } catch(err){
            toast("Invalid backup file.");
        }
        event.target.value = "";
    };
    reader.readAsText(file);
}


// ===================== PDF =====================
function downloadPDF(){
  try{
    let combined = isCombined(currentClass);
    if(combined) loadCombined();   // same fresh data as the screen

    let cfg = null;
    let pageFormat = "a4";
    if(combined){
        let n = combinedModel.cols.length;
        let fixedW = 20 + 50 + 3 * 26;          // Position + Name + 3 summary columns
        let testW = 24;
        let neededW = 28 + fixedW + n * testW;   // 14mm margins each side
        let pageW = Math.max(297, Math.ceil(neededW));
        pageFormat = pageW === 297 ? "a4" : [pageW, 210];
        cfg = {
            testW,
            body: n > 6 ? 10 : 12,
            head: n > 6 ? 9 : 11
        };
    }

    let doc = new jspdf.jsPDF({ orientation: "landscape", unit: "mm", format: pageFormat });
    let pageWidth = doc.internal.pageSize.getWidth();

    // ---- Header band ----
    doc.setFillColor(31, 43, 82);
    doc.rect(0, 0, pageWidth, 24, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Physics Test Result", pageWidth / 2, 12, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(currentClass, pageWidth / 2, 19, { align: "center" });

    doc.setTextColor(0, 0, 0);

    let headRow, rows;

    if(combined){
        headRow = ["Position", "Student Name"];
        combinedModel.cols.forEach(t => {
            headRow.push(t.name + "\nDate: " + t.date + "\nT.M: " + t.tm);
        });
        headRow.push("Grand Total", "Obtained Marks", "Percentage");

        rows = combinedModel.rows.map(r => [
            r.posLabel,
            r.exportName,
            ...r.cells.map(c => c === null ? "-" : c),
            fmtNum(r.grand),
            fmtNum(r.obtained),
            r.pctText
        ]);
    } else {
        headRow = ["Sr#", "Student Name"];
        tests.forEach(t => {
            headRow.push(t.name + "\nDate: " + t.date + "\nT.M: " + t.tm);
        });

        rows = students.map((s, i) => [i + 1, getExportName(s.name), ...s.marks]);
    }

    doc.autoTable({
        head: [headRow],
        body: rows,
        startY: 30,
        theme: "grid",
        styles: {
            fontSize: combined ? cfg.body : 13,
            cellPadding: combined ? 3 : 4,
            lineColor: [210, 217, 232],
            lineWidth: 0.25,
            font: "helvetica",
            valign: "middle",
        },
        headStyles: {
            fillColor: [31, 43, 82],
            textColor: 255,
            fontStyle: "bold",
            halign: "center",
            valign: "middle",
            minCellHeight: 20,
            fontSize: combined ? cfg.head : 12.5,
            lineColor: [31, 43, 82],
        },
        bodyStyles: {
            halign: "center",
            valign: "middle",
            minCellHeight: 11,
        },
        alternateRowStyles: {
            fillColor: [246, 248, 252],
        },
        columnStyles: combined ? (function(){
            let cs = {
                0: { halign: "center", cellWidth: 20, fontStyle: "bold", textColor: [91, 101, 122] },
                1: { halign: "left", fontStyle: "bold", cellWidth: 50 }
            };
            let n = combinedModel.cols.length;
            for(let c = 0; c < n; c++) cs[2 + c] = { cellWidth: cfg.testW };
            for(let c = 0; c < 3; c++) cs[2 + n + c] = { cellWidth: 26, fontStyle: "bold" };
            return cs;
        })() : {
            0: { halign: "center", cellWidth: 14, fontStyle: "bold", textColor: [91, 101, 122] },
            1: { halign: "left", fontStyle: "bold", cellWidth: 55 }
        },
        didParseCell: function(data){
            if(data.section === "body" && data.cell.raw == "A"){
                data.cell.styles.textColor = [220, 38, 38];
                data.cell.styles.fontStyle = "bold";
            }

            if(combined && data.section === "body"){
                let r = combinedModel.rows[data.row.index];
                let lastCol = headRow.length - 1;

                if(r && r.rank && r.rank <= 3){
                    // Updated PDF Colors: 1st: Light Yellow, 2nd: Light Red, 3rd: Light Green
                    let soft = { 
                        1: [254, 240, 138],  // Light Yellow
                        2: [254, 202, 202],  // Light Red
                        3: [187, 247, 208]   // Light Green
                    };
                    let strong = { 
                        1: [250, 204, 21],   // Yellow Badge Header
                        2: [248, 113, 113],  // Red Badge Header
                        3: [74, 222, 128]    // Green Badge Header
                    };
                    data.cell.styles.fillColor = (data.column.index === 0) ? strong[r.rank] : soft[r.rank];
                    data.cell.styles.fontStyle = "bold";
                    if(data.cell.raw != "A") data.cell.styles.textColor = [31, 43, 82];
                }
                if(data.column.index === lastCol){
                    data.cell.styles.fontStyle = "bold";
                }
            }
        },
        didDrawPage: function(data){
            let str = "Page " + doc.internal.getNumberOfPages();
            doc.setFontSize(9);
            doc.setTextColor(120, 128, 145);
            doc.text(str, pageWidth - 14, doc.internal.pageSize.getHeight() - 8);
        }
    });

    doc.save("Physics Class " + currentClass + " Result.pdf");
  } catch(err){
    console.error(err);
    toast("PDF failed: " + (err && err.message ? err.message : "unknown error"));
  }
}


// ===================== PNG =====================
function downloadPNG(){

    if(isCombined(currentClass)) loadCombined();   // same fresh data as the screen

    let wrapper = document.createElement("div");
    wrapper.style.background = "white";
    wrapper.style.padding = "20px";
    wrapper.style.width = "800px";
    wrapper.style.fontFamily = "Arial, sans-serif";
    wrapper.style.position = "fixed";
    wrapper.style.top = "-99999px";
    wrapper.style.left = "-99999px";
    document.body.appendChild(wrapper);

    let titleEl = document.createElement("h2");
    titleEl.innerText = "Physics Test Result - " + currentClass;
    titleEl.style.textAlign = "center";
    titleEl.style.color = "#2B3A67";
    titleEl.style.marginBottom = "15px";
    titleEl.style.fontSize = "22px";
    wrapper.appendChild(titleEl);

    let tableClone = document.getElementById("resultTable").cloneNode(true);

    let combined = isCombined(currentClass);

    let ths = tableClone.querySelectorAll("thead tr th");
    if(!combined) ths[ths.length - 1].remove();

    tableClone.querySelectorAll("thead button.delete").forEach(btn => btn.remove());

    tableClone.querySelectorAll("tbody tr").forEach((row, idx) => {
        let tds = row.querySelectorAll("td");
        if(combined){
            if(combinedModel.rows[idx]) tds[1].textContent = combinedModel.rows[idx].exportName;
        } else {
            if(students[idx]) tds[1].textContent = getExportName(students[idx].name);
            tds[tds.length - 1].remove();
        }
    });

    tableClone.querySelectorAll("input").forEach(input => {
        let span = document.createElement("span");
        span.innerText = input.value;
        if(input.value == "A"){
            span.style.color = "red";
            span.style.fontWeight = "bold";
        }
        input.parentNode.replaceChild(span, input);
    });

    tableClone.style.width = "100%";
    tableClone.style.borderCollapse = "collapse";
    tableClone.style.fontSize = "14px";
    wrapper.appendChild(tableClone);

    let pageHeightPx = 1122 * 2;

    html2canvas(wrapper, { scale: 2, useCORS: true, scrollY: 0 }).then(canvas => {

        document.body.removeChild(wrapper);

        let totalH = canvas.height;
        let totalW = canvas.width;
        let pages = Math.ceil(totalH / pageHeightPx);

        function downloadPage(i){
            if(i >= pages) return;

            let sliceH = Math.min(pageHeightPx, totalH - i * pageHeightPx);

            let pageCanvas = document.createElement("canvas");
            pageCanvas.width = totalW;
            pageCanvas.height = sliceH;

            let ctx = pageCanvas.getContext("2d");
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, totalW, sliceH);
            ctx.drawImage(canvas, 0, i * pageHeightPx, totalW, sliceH, 0, 0, totalW, sliceH);

            let link = document.createElement("a");
            link.download = pages > 1
                ? "Physics_Result_Page" + (i + 1) + ".png"
                : "Physics_Result.png";
            link.href = pageCanvas.toDataURL("image/png");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setTimeout(() => downloadPage(i + 1), 500);
        }

        downloadPage(0);

    });
}


// ===================== COMBINED RESULT (9th / 10th) =====================
let combinedModel = null;

function isCombined(cls){
    return /\sCombined$/.test(cls || "");
}

function setCombinedMode(on){
    ["btnAddTest", "btnAddStudent", "btnSave"].forEach(id => {
        let el = document.getElementById(id);
        if(el) el.style.display = on ? "none" : "";
    });
}

function getClassData(cls){
    let saved = localStorage.getItem(cls);
    if(saved){
        try{
            let d = JSON.parse(saved);
            return { students: d.students || [], tests: d.tests || [] };
        } catch(e){}
    }
    if(defaultClassData[cls]){
        return JSON.parse(JSON.stringify(defaultClassData[cls]));
    }
    return {
        students: (classes[cls] || []).map(n => ({ name: n, marks: [] })),
        tests: []
    };
}

function numVal(v){
    let s = String(v === undefined || v === null ? "" : v).trim();
    if(s === "") return 0;
    let n = Number(s);
    return (isNaN(n) || !isFinite(n)) ? 0 : n;
}

function fmtNum(n){
    return String(Math.round(n * 100) / 100);
}

function ordinal(n){
    let v = n % 100;
    if(v >= 11 && v <= 13) return n + "th";
    switch(n % 10){
        case 1: return n + "st";
        case 2: return n + "nd";
        case 3: return n + "rd";
        default: return n + "th";
    }
}

function escHTML(s){
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildCombined(cls){
    let grade = cls.split(" ")[0];
    let sources = [grade + " Boys", grade + " Girls"];

    let cols = [];
    let colIndex = {};
    let entries = [];

    sources.forEach(src => {
        let d = getClassData(src);
        let seen = {};
        let map = d.tests.map(t => {
            let base = [t.name, t.date, t.tm].join("|");
            seen[base] = (seen[base] || 0) + 1;
            let key = base + "|" + seen[base];
            if(!(key in colIndex)){
                colIndex[key] = cols.length;
                cols.push({ key, name: t.name, date: t.date, tm: t.tm });
            }
            return key;
        });
        d.students.forEach(s => {
            entries.push({ src, name: s.name, map, marks: s.marks || [] });
        });
    });

    cols = cols.map((c, i) => ({ c, i }))
        .sort((a, b) => (a.c.date || "").localeCompare(b.c.date || "") || a.i - b.i)
        .map(o => o.c);
    cols.forEach((c, i) => { colIndex[c.key] = i; });

    let grandAll = cols.reduce((sum, c) => sum + numVal(c.tm), 0);

    let rows = entries.map(e => {
        let cells = cols.map(() => null);
        let grand = grandAll;
        let obtained = 0;

        e.map.forEach((key, j) => {
            let c = colIndex[key];
            let raw = (e.marks[j] === undefined || e.marks[j] === null) ? "" : String(e.marks[j]);
            cells[c] = raw;
            obtained += numVal(raw);
        });

        let pct = grand > 0 ? (obtained / grand) * 100 : 0;

        return {
            name: getDisplayName(e.name, e.src),
            exportName: getExportName(e.name),
            sortName: getDisplayName(e.name, e.src),
            cells, grand, obtained,
            ranked: grand > 0,
            pctKey: Math.round(pct * 1e6),
            pctText: grand > 0 ? pct.toFixed(2) + "%" : "-",
            rank: null,
            posLabel: "-"
        };
    });

    rows.sort((a, b) => {
        if(a.ranked !== b.ranked) return a.ranked ? -1 : 1;
        if(a.pctKey !== b.pctKey) return b.pctKey - a.pctKey;
        return a.sortName.localeCompare(b.sortName);
    });

    let prevKey = null, prevRank = 0;
    rows.forEach(r => {
        if(!r.ranked) return;
        if(r.pctKey !== prevKey){
            prevRank += 1;
            prevKey = r.pctKey;
        }
        r.rank = prevRank;
        r.posLabel = ordinal(prevRank);
    });

    return { cols, rows };
}

function loadCombined(){
    students = [];
    tests = [];
    combinedModel = buildCombined(currentClass);
    setCombinedMode(true);
    emptyState.style.display = "none";
    area.style.display = "block";
    pdfClassEl.textContent = currentClass;
    renderCombined();
}

function renderCombined(){
    let m = combinedModel;

    let h = "<th>Position</th><th>Student Name</th>";
    m.cols.forEach(t => {
        h += `<th>${escHTML(t.name)}<br>Date : ${escHTML(t.date)}<br>T.M = ${escHTML(t.tm)}</th>`;
    });
    h += "<th>Grand Total</th><th>Obtained Marks</th><th>Percentage</th>";
    head.innerHTML = h;

    body.innerHTML = m.rows.map(r => {
        let top = (r.rank && r.rank <= 3) ? ` class="rank-${r.rank}"` : "";
        let pos = (r.rank && r.rank <= 3)
            ? `<span class="posBadge">${r.posLabel}</span>`
            : r.posLabel;

        let marks = r.cells.map(c => {
            if(c === null) return `<td class="naCell">—</td>`;
            return `<td${c === "A" ? ' class="absentCell"' : ""}>${escHTML(c)}</td>`;
        }).join("");

        return `<tr${top}><td>${pos}</td><td>${escHTML(r.name)}</td>${marks}` +
               `<td>${fmtNum(r.grand)}</td><td>${fmtNum(r.obtained)}</td>` +
               `<td class="pctCell">${r.pctText}</td></tr>`;
    }).join("");
}

window.addEventListener("storage", () => {
    if(currentClass && isCombined(currentClass)) loadCombined();
});

// Initial state
emptyState.style.display = "block";
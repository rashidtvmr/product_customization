const generatePDFForBackend = () => {

    console.log('generating pdf....')
    var doc = new jspdf.jsPDF();
    console.log(doc)
    doc.html(document.getElementById('pdf-content'), {
        callback: function (doc) {
            doc.save();
        }
    });
}
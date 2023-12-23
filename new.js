document.addEventListener('DOMContentLoaded', function () {
    // Function to calculate the cost
    function calculateCost() {
        // Fetch user inputs
        const blockchain = document.getElementById('blockchain').value;
        const numberOfNFTs = parseInt(document.getElementById('numberOfNFTs').value);
        const metadataSize = parseInt(document.getElementById('metadataSize').value);
        const gasFee = parseInt(document.getElementById('gasFee').value);

        // Placeholder values for demonstration purposes
        const mintingFeePerNFT = 0.05; // Replace with actual minting fee
        const additionalPlatformFee = 0.02; // Replace with actual platform fee

        // Calculate total cost
        const mintingCost = numberOfNFTs * mintingFeePerNFT;
        const gasCost = numberOfNFTs * gasFee;
        const totalCost = mintingCost + gasCost + additionalPlatformFee;

        // Display the result
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `
            <h3>Cost Estimate</h3>
            <p>Minting Cost: ${mintingCost} ETH</p>
            <p>Gas Cost: ${gasCost} ETH</p>
            <p>Total Cost: ${totalCost} ETH</p>
        `;
    }

    // Attach the calculateCost function to the button click event
    document.querySelector('button').addEventListener('click', calculateCost);
});
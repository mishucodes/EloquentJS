document.querySelector('.container').addEventListener('click', (event) =>
    {
        if(event.target.tagName == 'BUTTON')
        {
            console.log('button clicked');
            document.querySelectorAll('.container .content').forEach(div => div.style.setProperty('display', 'none', 'important'));

            if(event.target.closest('#tabOne'))
                document.querySelector('#tabOne div').style.display = 'block';
            else if(event.target.closest('#tabTwo'))
                document.querySelector('#tabTwo div').style.display = 'block';
            else if(event.target.closest('#tabThree'))
                document.querySelector('#tabThree div').style.display = 'block';
        }
    });
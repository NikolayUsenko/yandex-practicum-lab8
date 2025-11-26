function updateFields()
{
    const selectedValue = document.getElementById('user-select').value;
    const answerFields = document.querySelector('.container-for-answer');
    answerFields.innerHTML = '';

    if (selectedValue === 'option-1')
    {
        const input = document.createElement('input');
        input.className = 'input-text';
        input.type = 'text';
        input.placeholder = 'Введите текст';

        answerFields.appendChild(input);
    }
    else if (selectedValue === 'option-2')
    {

        const checkbox = document.createElement('input');
        checkbox.className = 'checkbox';
        checkbox.type = 'checkbox';
        checkbox.id = 'agree-checkbox';
        checkbox.value = 'agree';
        
        const label = document.createElement('label');
        label.className = 'agree-label';
        label.textContent = 'Согласиться';
        label.htmlFor = checkbox.id;

        answerFields.appendChild(checkbox);
        answerFields.appendChild(label);
    }
    
    if (selectedValue != 0)
    {
        const liveRegion = document.createElement('div');
        liveRegion.className = 'aria-live-div';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.textContent = `Вы выбрали: ${selectedValue}`;
        answerFields.appendChild(liveRegion);
    }
}
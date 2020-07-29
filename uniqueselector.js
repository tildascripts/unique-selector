function getUniqueSelector(element) {
	//определяем уникалный селектор выбранного элемента
	//get unique selector of clicked element
	uniqueSelector='';
	par = element;
	while (par.parentNode.tagName!='HTML') {
		count=1;
		prev=par;
		while (prev.previousElementSibling!=null){
			count++;
			prev=prev.previousElementSibling;
		}
		uniqueSelector = '>:nth-child(' + count + ')'+uniqueSelector;
		par = par.parentNode;
	}
	uniqueSelector = par.tagName + uniqueSelector;
	copy(uniqueSelector); //на шаг впереди :)
	return uniqueSelector;
}
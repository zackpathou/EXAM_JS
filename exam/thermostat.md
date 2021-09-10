## Thermostat

> Le but de l'exercice va etre de créer un mini thermostat qui aura un 3 boutons: `Plus`, `Moins` et `Save`. Ainsi que 2 textes, un qui representera la `temperature choisi` et un autre qui reprensentera la `temperature actuelle` qui sera par defaut égal a 20. Lorsque vous cliquerez sur `Plus/Moins` la valeur de la `temperature choisi` changera puis en cliquant sur `Save` toute les demi secondes la valeur de la `tempature actuelle` s'approchera de la valeur de la `temperature choisi` par increment/decrement de 1. Ensuite un bouton `Temperature Favorite` qui vous permettre de faire revenir la `temperature choisi` a une temperature par defaut

> En bonus vous pouvez lorsque la valeur de TC est superieur a 100 ou inferieur a 0 exploiter l'API de https://tenor.com/gifapi pour afficher un gif. **Il est possible que la requete s'execute correcte mais que vous soyez confronter a un probleme de <i>CORS</i> et que le gif ne s'affiche pas. N'y pretez pas attention si la requete est bonne cela me suffit**.

- Créer les boutons, Plus, Moins, Save ainsi que les deux textes pour la temperature choisi (TC) et la temperature actuelle (TA)
- Ajouter au bouton des events listener permettant de changer la valeur afficher de TC
- Ajouter a Save un Event Listener qui va appeler une fonction qui va recuperer la valeur de TC puis tant que la valeur de TA n'est pas égal a celle TC, va augmenter/reduire la valeur de TA toute les demi-secondes
- Ajouter un boutton temperature favorite qui va vous permettre de changer la valeur de TC a la valeur par defaut
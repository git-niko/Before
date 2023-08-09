class Utility {

    static getInputValue(elementID: string): string {

        // type assertion syntax (NEW)
        const inputElement: HTMLInputElement = document.getElementById(elementID) as HTMLInputElement;
        // const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
        
        return inputElement.value;
    }
}
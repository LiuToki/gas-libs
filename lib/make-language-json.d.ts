declare class CMakeLanguageFile {
    private m_sheet;
    private m_keyColNum;
    private m_langColNums;
    constructor();
    private MakeOneLanguageFile;
    /**
     * SetKeyColumnNumber
     */
    SetKeyColumnNumber(keyColNum: number): void;
    /**
     * SetLangColumnNumbers
     */
    SetLangColumnNumbers(langColNums: number[]): void;
    /**
     * DoWork
     */
    DoWork(): void;
}

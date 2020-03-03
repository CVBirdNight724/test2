const ArgumentType = Scratch.ArgumentType;
const BlockType = Scratch.BlockType;
const formatMessage = Scratch.formatMessage;
const log = Scratch.log;

class TestExt {
    constructor (runtime){
        this.runtime = runtime;
        this.runtime.registerPeripheralExtension('TestExt', this);
    }
    
    getInfo (){
        return {
            id: 'TestExt',
            name: 'TestExt',
            color1: '#DE5277',
            color2: '#AA3F5B',
            color3: '#AA3F5B',
            
            blocks: [
                {
                    opcode: 'test1',
                    blockType: BlockType.COMMAND,
                    text: 'Test [VALUE]',
                    arguments: {
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 123
                        }
                    }
                }
            ]
        };
    }
    
    test1 (args){
        console.log('test1', args.VALUE);
    }
    
    
}

module.exports = TestExt;

/*
Language: RISC-V Assembly
Author: Rodolfo Azevedo <rodolfo.azevedo@gmail.com>
Description: RISC-V Assembly language (based on MIPS highlighting)
Website: https://riscv.org
Category: assembler
*/

export default function(hljs) {
  // local labels: %?[FB]?[AT]?\d{1,2}\w+
  return {
    name: 'RISC-V Assembly RV32/64IMAFDCV',
    case_insensitive: true,
    aliases: [ 'riscv' ],
    keywords: {
      $pattern: '\\.?' + hljs.IDENT_RE,
      meta:
        // GNU preprocs
        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ',
      built_in:
        'x0 x1 x2 x3 x4 x5 x6 x7 x8 x9 x10 x11 x12 x13 x14 x15 ' // integer registers
        + 'x16 x17 x18 x19 x20 x21 x22 x23 x24 x25 x26 x27 x28 x29 x30 x31 ' // integer registers
        + 'zero ra sp gp tp t0 t1 t2 t3 t4 t5 t6' // integer register aliases
        + 'a0 a1 a2 a3 a4 a5 a6 a7 s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 ' // integer register aliases
        + 'f0 f1 f2 f2 f4 f5 f6 f7 f8 f9 f10 f11 f12 f13 f14 f15 ' // floating-point registers
        + 'f16 f17 f18 f19 f20 f21 f22 f23 f24 f25 f26 f27 f28 f29 f30 f31 ' // floating-point registers
        + 'ft0 ft1 ft2 ft3 ft4 ft5 ft6 ft7 ft8 ft9 ft10 ft11' // floating-point register aliases (temporaries)
        + 'fs0 fs1 fs2 fs3 fs4 fs5 fs6 fs7 fs8 fs9 fs10 fs11' // floating-point register aliases (saved)
        + 'fa0 fa1 fa2 fa3 fa4 fa5 fa6 fa7' // floating-point register aliases (arguments)
    },
    contains: [
      {
        className: 'keyword',
        begin: '\\b(' // mnemonics
            // 32/64-bit integer instructions
            + 'slli?w?|srli?w?|srai?w?|' // shift
            + 'addi?w?|subw?|lui|auipc|' // arithmetic
            + 'xori?|ori?andi?|' // logical
            + 'slti?u?|' // compare
            + 'beq|bne|bltu?|bgeu?|' // branch
            + 'jalr?|' // jump
            + 'fence|fence.i|'  // synch
            + 'ecall|ebreak|' // environment
            + 'csrrw|csrrs|csrrc|csrrwi|csrrsi|csrrci|' // CSR
            + 'lbu?|lhu?|lwu?|ld|sb|sh|sw|sd|' // load/store
            + 'mret|sret|wfi|sfence.vma|' // privileged
            + 'c.lw|c.lwsp|c.flw|c.flwsp|c.fld|c.fldsp|c.sw|c.swsp|c.fsw|c.fswsp|c.fsd|c.fsdsp|' // compressed load/store
            + 'c.addi?|c.addi16sp|c.addi4spn|c.sub|c.andi?|c.or|c.xor|c.mv|c.li|c.lui|' // compressed arithmetic
            + 'c.slli|c.srai|c.srli|' // compressed shift
            + 'c.beqz|c.bnez|c.j|c.jr|c.jalr?|' // compressed branch/jump
            + 'c.ebreak|' // compressed environment
            + 'mulh?s?u?|mulw|divu?|divw|remu?w?|' // multiply/divide
            + 'lr.w|sc.w|amoswap.w|amoadd.w|amoxor.w|amoand.w|amoor.w|amomin.w|amomax.w|amominu.w|amomaxu.w|' // atomic 32 bits
            + 'lr.d|sc.d|amoswap.d|amoadd.d|amoxor.d|amoand.d|amoor.d|amomin.d|amomax.d|amominu.d|amomaxu.d|' // atomic 64 bits
            + 'fmv.w.x|fmv.x.w|fmv.d.x|fmv.x.d|' // FP move
            + 'fcvt..s.wu?|fcvt.d.wu?|fcvt.s.lu?|fcvt.d.lu?|fcvt.wu?.s|fcvt.wu?.d|fcvt.lu?.s|fcvt.lu?.d|' // FP convert
            + 'flw|fld|fsw|fsd|' // FP load/store
            + 'fmadd.s|fmadd.d|fmsub.s|fmsub.d|fmul.s|fmul.d|fdiv.s|fdiv.d|' // FP arithmetic
            + 'fmadd.s|fmadd.d|fmsub.s|fmsub.d|fnmsub.s|fnmsub.d|fnmadd.s|fnmadd.d|' // FP multiply-add/sub
            + 'fsgnj.s|fsgnj.d|fsgnjn.s|fsgnjn.d|fsgnjx.s|fsgnjx.d|' // FP sign
            + 'fmin.s|fmin.d|fmax.s|fmax.d|' // FP min/max
            + 'feq.s|feq.d|flt.s|flt.d|fle.s|fle.d|fclass.s|fclass.d' // FP compare
            + 'frcsr|frrm|frflags|fscsr|fsrm|fsflags|fsrmi|fsflagsi|' // FP CSR
            + 'setvl|vmulh|vrem|vsll|vsrl|vsra|vld|vlds|vldx|vst|vsts|vstx|amoswap|amoadd|amoxor|amoand|amoor|amomin|amomax|' // vector
            + 'vpeq|vpne|vplt|vpge|vpand|vpandn|vpor|vpxor|vpnot|vpswap|vmov|vcvt|vadd|vsub|vmul|vdiv|vsqrt|' // vector
            + 'vfmadd|vfmsub|vfnmsub|vfnmadd|vsgnj|vsgnjn|vsgnjx|vmin|vmax|vxor|vor|vand|vclass|vsetdcfg|vextract|vmerge|vselect|' // vector
        + ')',
        end: '\\s'
      },
      // lines ending with ; or # aren't really comments, probably auto-detect fail
      hljs.COMMENT('[;#](?!\\s*$)', '$'),
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        begin: '\'',
        end: '[^\\\\]\'',
        relevance: 0
      },
      {
        className: 'title',
        begin: '\\|',
        end: '\\|',
        illegal: '\\n',
        relevance: 0
      },
      {
        className: 'number',
        variants: [
          { // hex
            begin: '0x[0-9a-f]+' },
          { // bare number
            begin: '\\b-?\\d+' }
        ],
        relevance: 0
      },
      {
        className: 'symbol',
        variants: [
          { // GNU MIPS syntax
            begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:' },
          { // numbered local labels
            begin: '^\\s*[0-9]+:' },
          { // number local label reference (backwards, forwards)
            begin: '[0-9]+[bf]' }
        ],
        relevance: 0
      }
    ],
    // forward slashes are not allowed
    illegal: /\//
  };
}

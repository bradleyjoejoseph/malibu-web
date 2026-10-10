---
title: "Topic 01: How Tokenizers Translate Human Text into AI Numbers"
date: "2026-10-11"
summary: "Why neural networks are completely blind to letters, and how Phase 1 of Malibu maps characters and byte sequences into integer token matrices."
tags: ["Tokenization", "Phase-1", "PyTorch"]
readTime: "5 min read"
---

Before an artificial intelligence can do any math on a sentence, it has to overcome a fundamental barrier: **computers do not know what words are.**

A computer has never seen the letter "A" or the word "Apple". It only processes bits, bytes, and matrices of floating-point numbers.

To feed language into Malibu, we must build a translation layer called a **Tokenizer**.

---

## The Core Concept

Imagine the sentence:
> `"The king was pleased."`

If we pass that string directly to a PyTorch tensor, PyTorch throws an error. It expects numbers, not characters.

The job of the tokenizer is to create a bidirectional mapping:
1. **`encode(text) -> List[int]`**: Converts a string into a list of integer token IDs.
2. **`decode(tokens) -> str`**: Converts a list of integers back into human-readable text.

```
"The king was pleased" ──▶ [ENCODE] ──▶ [45, 12, 89, 4, 30]
[45, 12, 89, 4, 30]    ──▶ [DECODE] ──▶ "The king was pleased"
```

---

## Character-Level vs. Byte-Pair Encoding (BPE)

There are two primary ways to design a tokenizer:

### 1. Character-Level Tokenizer (The Starting Brick)
- We find every unique character in our training text (e.g. `a-z`, `A-Z`, punctuation, spaces).
- If there are 65 unique characters, our **Vocabulary Size** ($V$) is 65.
- Every character gets an ID from `0` to `64`.
- **Advantage**: Simple to code in 20 lines of Python. Zero out-of-vocabulary errors.
- **Drawback**: Sequences become very long because every single character is a separate token.

### 2. Byte-Pair Encoding (BPE - The ChatGPT Standard)
- Instead of single characters, frequent pairs of characters are merged into subword chunks (e.g., `"ing"`, `"the"`, `"tion"` become single token IDs).
- **Advantage**: Much shorter sequence lengths and richer representations per token.
- **Drawback**: Larger vocabulary size (e.g. 50,000+ tokens) and more complex merge tables.

---

## What We Build in Malibu

In Phase 1 of Malibu, we write both:
1. A clean, educational `CharTokenizer` to test our attention math instantly on small text.
2. A `ByteTokenizer` that maps raw UTF-8 bytes (`0..255`) so Malibu can process any Unicode character without breaking.

In the next post, I'll walk through the exact code and unit tests verifying our token mapping!

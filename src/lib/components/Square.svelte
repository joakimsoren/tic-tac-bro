<script>
    export let value;
    export let onSquareClick;
</script>

<button 
    class="square" 
    on:click={onSquareClick}
    disabled={value !== null}
>
    {value || ''}
</button>

<style>
    .square {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 4px;
        background: #ffffff;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        margin: 0;
        padding: 0;
        text-align: center;
        transition: background-color 0.2s;
        color: #213547;
    }

    .square:hover:not(:disabled) {
        background: #f0f0f0;
    }

    .square:disabled {
        cursor: not-allowed;
        color: #213547;
        opacity: 1;
    }
</style>